const pool = require('../config/db');

const sendSuccess = (res, statusCode, data, extra = {}) => {
    return res.status(statusCode).json({ success: true, ...extra, data });
};

const sendError = (res, statusCode, message, error = null) => {
    if (error) console.error("Database Details:", error);
    return res.status(statusCode).json({ success: false, message });
};

exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await pool.query(`
            SELECT u.id, u.full_name, u.email, s.skill_name, u.role, u.created_at
            FROM users u
            JOIN skills s ON u.selected_skill_id = s.id
            ORDER BY u.full_name`);

        const [countResult] = await pool.query("SELECT COUNT(*) AS total FROM users");
        const totalUsers = countResult[0].total;

        return sendSuccess(res, 200, users, { count: totalUsers });
    } catch (err) {
        return sendError(res, 500, "Unable to find users. A database error occurred.", err.message);
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        if (!user_id) {
            return sendError(res, 400, "User ID is required");
        }

        const [getDetail] = await pool.query(
            `SELECT 
                u.id AS user_table_id,
                u.full_name,
                u.role,
                c.id AS course_id,
                c.course_name,
                COUNT(DISTINCT l.id) AS total_lessons,
                COUNT(DISTINCT ulp.lesson_id) AS completed_lessons,
                IFNULL(
                    ROUND((COUNT(DISTINCT ulp.lesson_id) / COUNT(DISTINCT l.id)) * 100), 
                    0
                ) AS course_progress_percent
             FROM users u
             JOIN user_lesson_progress up ON u.id = up.user_id
             JOIN courses c ON up.course_id = c.id
             JOIN lessons l ON c.id = l.course_id
             LEFT JOIN user_lesson_progress ulp 
                ON l.id = ulp.lesson_id AND ulp.user_id = u.id
             WHERE u.id = ?
             GROUP BY c.id, u.id;`,
            [user_id]
        );

        if (getDetail.length === 0) {
            return sendError(res, 404, "No progress or course data found for this user");
        }

        return sendSuccess(res, 200, getDetail);

    } catch (err) {
        return sendError(res, 500, "Database Error", err.message);
    }
};

exports.userGrowth = async (req, res) => {
    try {
        const [results] = await pool.query(`
            SELECT
                DATE_FORMAT(u.created_at, '%Y-%m-%d') AS date,
                s.skill_name AS skill,
                COUNT(u.id) AS count
            FROM users u
            JOIN skills s ON u.selected_skill_id = s.id
            GROUP BY DATE_FORMAT(u.created_at, '%Y-%m-%d'), s.skill_name
            ORDER BY date ASC;
        `);

        const formattedData = results.reduce((acc, current) => {
            const { date, skill, count } = current;
            let dateRow = acc.find(item => item.date === date);
            if (!dateRow) {
                dateRow = { date };
                acc.push(dateRow);
            }
            dateRow[skill] = Number(count);
            return acc;
        }, []);

        return res.status(200).json(formattedData);
    } catch (err) {
        return sendError(res, 500, "Unable to find user progress information.", err.message);
    }
};

exports.searchUsers = async (req, res) => {
    try {
        const { search = "" } = req.query;
        const searchTerm = `%${search}%`;

        const [users] = await pool.execute(`
            SELECT id, full_name, email, role
            FROM users
            WHERE full_name LIKE ? OR email LIKE ? OR role LIKE ?
            ORDER BY created_at DESC`,
            [searchTerm, searchTerm, searchTerm]
        );

        if (users.length === 0) {
    return sendError(res, 404, "User not found.");
}

        return sendSuccess(res, 200, users, { count: users.length });
    } catch (error) {
        return sendError(res, 500, "The search failed. There was an error on the server.", error.message);
    }
};

exports.getCourses = async (req, res) => {
    try {
        const [courses] = await pool.query("SELECT id, course_name FROM courses");
        const [countCourses] = await pool.query("SELECT COUNT(*) AS total FROM courses");

        return sendSuccess(res, 200, courses, { count: countCourses[0].total });
    } catch (err) {
        return sendError(res, 500, "Unable get courses.", err.message);
    }
};

exports.getSkills = async (req, res) => {
    try {
        const [skills] = await pool.query("SELECT id, skill_name FROM skills");
        const [countskills] = await pool.query("SELECT COUNT(*) AS total FROM skills");

        return sendSuccess(res, 200, skills, { count: countskills[0].total });
    } catch (err) {
        return sendError(res, 500, "Unable to load skills.", err.message);
    }
};

exports.getLessons = async (req, res) => {
    try {
        const [lessons] = await pool.query("SELECT id, lesson_name, video_url FROM lessons");
        const [countLessons] = await pool.query("SELECT COUNT(*) AS total FROM lessons");

        return sendSuccess(res, 200, lessons, { count: countLessons[0].total });
    } catch (err) {
        return sendError(res, 500, "Lessons could not be loaded.", err.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const [user] = await pool.query("SELECT id FROM users WHERE id = ?", [id]);
        if (user.length === 0) {
            return sendError(res, 404, "This user was not found.");
        }

        await pool.query("DELETE FROM users WHERE id = ?", [id]);
        return res.status(200).json({ success: true, message: "User deleted successfully", id });
    } catch (err) {
        return sendError(res, 500, "Unable to delete user.", err.message);
    }
};

exports.addCourse = async (req, res) => {
    try {
        const { course_name, skill_id } = req.body;

        if (!course_name || !skill_id) {
            return sendError(res, 400, "Course name and Skill ID are required.");
        }

        const [results] = await pool.query(
            "INSERT INTO courses (course_name, skill_id) VALUES (?,?)",
            [course_name, skill_id]
        );
        return res.status(201).json({ success: true, message: "Course added successfully", courseId: results.insertId });
    } catch (err) {
        return sendError(res, 500, "Unable to add new course.", err.message);
    }
};

exports.addLessons = async (req, res) => {
    try {
        const { lesson_name, video_url, course_id } = req.body || {};

        if (!lesson_name || !video_url || course_id == null) {
            return sendError(res, 400, "All information must be filled in by the system.");
        }

        const [results] = await pool.query(
            "INSERT INTO lessons (lesson_name, video_url, course_id) VALUES (?, ?, ?)",
            [lesson_name, video_url, course_id]
        );
        return res.status(201).json({ success: true, message: "Lesson added successfully", lessonId: results.insertId });
    } catch (err) {
        return sendError(res, 500, "Unable to add the course. Please verify that the Course ID is valid.", err.message);
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM courses WHERE id = ?", [id]);
        
        // እዚህም ID ጨምረናል
        return res.status(200).json({ success: true, message: "Course deleted successfully", id });
    } catch(err) {
        return sendError(res, 500, "The course could not be deleted.", err.message);
    }
};

exports.deleteLesson = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM lessons WHERE id = ?", [id]);
        
        return res.status(200).json({ success: true, message: "Lesson deleted successfully", id });
    } catch(err) {
        return sendError(res, 500, "The lesson could not be deleted.", err.message);
    }
};

exports.getDesign = async (req, res) => {
    try {
        const { id } = req.params;
        const [course] = await pool.query(`
            SELECT c.id, c.course_name, c.skill_id, s.skill_name
            FROM courses c
            JOIN skills s ON c.skill_id = s.id
            WHERE s.id = ?`, 
            [id]
        );
        return res.status(200).json({ success: true, course });
    } catch (err) {
        return sendError(res, 500, "Design information could not be found.", err.message);
    }
};

exports.getLessonsByCourseId = async (req, res) => {
    try {
        const { id } = req.params;
        const [lessons] = await pool.query(`
            SELECT l.id, l.lesson_name, l.video_url, l.course_id, c.course_name
            FROM lessons l
            JOIN courses c ON l.course_id = c.id
            WHERE c.id = ? `, 
            [id]
        );
        return res.status(200).json({ success: true, lessons });
    } catch (err) {
        return sendError(res, 500, "Unable to load course lessons.", err.message);
    }
};