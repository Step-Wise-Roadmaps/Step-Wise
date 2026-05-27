const pool = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await pool.query(`
            SELECT 
                u.id, 
                u.full_name, 
                u.email, 
                s.skill_name, 
                u.role, 
                u.created_at
                FROM users u
                JOIN skills s ON u.selected_skill_id = s.id
                ORDER BY u.full_name`);

        const [countResult] = await pool.query(
            "SELECT COUNT(*) AS total FROM users"
        )
        const totalUsers = countResult[0].total;

        res.status(200).json({
            success: true,
            count: totalUsers,
            data: users
        });
    } catch (err) {
        res.status(500).json({ message: "Database Error", error: err.message });
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
            JOIN skills s 
                ON u.selected_skill_id = s.id
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

        res.status(200).json(formattedData);

    } catch (err) {
        console.error("Error fetching user growth:", err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

exports.searchUsers = async (req, res) => {
    try {
        const { search = "" } = req.query;

        const searchTerm = `%${search}%`;

        const [users] = await pool.execute(
            `
            SELECT id, full_name, email, role
            FROM users
            WHERE
                full_name LIKE ?
                OR email LIKE ?
                OR role LIKE ?
            ORDER BY created_at DESC
            `,
            [searchTerm, searchTerm, searchTerm]
        );

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const [courses] = await pool.query(
            "SELECT id, course_name FROM courses"
        )
        const [countCourses] = await pool.query(
            "SELECT COUNT(*) AS total FROM courses"
        )

        const totalCourses = countCourses[0].total;

        res.status(200).json({ 
            success: true,
            count: totalCourses,
            data: courses
         })
    } catch (err) {
        res.status(500).json({ message: "Database Error", error: err.message });
    }
}

exports.getSkills = async (req, res) => {
    try {
        const [skills] = await pool.query(
            "SELECT id, skill_name FROM skills"
        )

        const [countskills] = await pool.query(
            "SELECT COUNT(*) AS total FROM skills"
        )

        const totalSkills = countskills[0].total;

        res.status(200).json({
            success: true,
            count: totalSkills,
            data: skills
        })

    } catch (err) {
        res.status(500).json({ message: "Database Error", error: err.message });
    }
}

exports.getLessons = async (req, res) => {
    try {
        const [lessons] = await pool.query(
            "SELECT id, lesson_name, video_url FROM lessons"
        )
        const [countLessons] = await pool.query(
            "SELECT COUNT(*) AS total FROM lessons"
        )

        const totalLessons = countLessons[0].total;

        res.status(200).json({
            success: true,
            count: totalLessons,
            data: lessons
        })
    } catch (err) {
        res.status(500).json({ message: "Database Error", error: err.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const [user] = await pool.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        await pool.query("DELETE FROM users WHERE id = ?", [id]);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Delete failed", error: err.message })
    }
        
};

exports.addCourse = async (req, res) => {
    try {
        const { course_name, skill_id } = req.body;
        console.log(req.body);

        if (!course_name || !skill_id) {
            return res.status(400).json({ message: "Course name and Skill ID are required" });
        }

        const [results] = await pool.query(
            "INSERT INTO courses (course_name, skill_id) VALUES (?,?)",
            [course_name, skill_id]
        );
        res.status(201).json({ message: "Course added successfully", courseId: results.insertId })
        
    } catch (err) {
        res.status(500).json({ message: "Failed to add course", error: err.message })
    }
};

exports.addLessons = async (req, res) => {
    try {
        const { lesson_name, video_url, course_id } = req.body || {};

        if (!lesson_name || !video_url || !course_id) {
            return res.status(400).json({ message: "lesson_name, video_url, and course_id are required" })
        }

        const [results] = await pool.query(
            "INSERT INTO lessons (lesson_name, video_url, course_id) VALUES (?, ?, ?)",
            [lesson_name, video_url, course_id]
        )
        res.status(201).json({ message: "Lessons added successfully", lessonId: results.insertId })

    } catch (err) {
        res.status(500).json({ message: `Failed to add lessons. Check that course_id exists and the field names are lesson_name, video_url, course_id. ${err.message}` })
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const { id  } = req.params;

        await pool.query("DELETE FROM courses WHERE id = ?", [id]);

        res.status(200).json({ message: "Course deleted successfully" });

    } catch(err) {
        return res.status(500).json({ message: "Delete failed", error: err.message });
    }
}

exports.getDesign = async (req, res) => {
    try {
        const { id } = req.params;

        const [course] = await pool.query(
            `SELECT 
                c.id,
                c.course_name,
                c.skill_id,
                s.skill_name
            FROM courses c
            JOIN skills s 
            ON c.skill_id = s.id
            WHERE s.id = ?`,
            [id]
        );

        res.status(200).json({ course });

    } catch (err) {
        res.status(500).json({ message: "error", error: err.message });
    }
};