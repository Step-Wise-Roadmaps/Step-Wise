const pool = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await pool.query("SELECT id, full_name, email, role, created_at FROM users");

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

exports.getLessons = async (req, res) => {
    try {
        const [lessons] = await pool.query(
            "SELECT id, lesson_name, video_url FROM lessons"
        )
        const [countLessons] = await pool.query(
            "SELECT COUNT(*) AS total FROM lessons"
        )

        const totalLessons = countLessons.total;

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
        const { lesson_name, video_url, course_id } = req.body;

        if (!lesson_name || !video_url || !course_id) {
            return res.status(400).json({ message: "Lesson name and Video url and Course id are required" })
        }

        const [results] = await pool.query(
            "INSERT INTO lessons (lesson_name, video_url, course_id) VALUES (?, ?, ?)",
            [lesson_name, video_url, course_id]
        )
        res.status(201).json({ message: "Lessons added successfully", lessonId: results.insertId })

    } catch (err) {
        res.status(500).json({ message: "Failed to add lessons", error: err.message })
    }
};
