const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { error } = require('console');

// secret key
const JWT_SECRET = process.env.JWT_SECRET;

const sendSuccess = (res, statusCode, data, extra = {}) => {
    return res.status(statusCode).json({ success: true, ...extra, data });
}

const sendError = (res, statusCode, message, error = null) => {
    if (error) console.error("Database Details:", error);
    return res.status(statusCode).json({success: false, message});
}

exports.getUsers = async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM users");
        return sendSuccess(res, 200, results)
    } catch (err) {
        return sendError(res, 500, "DB Error", err.message);
    }
};

exports.registerUsers = async (req, res) => {
    try {
        const { email, password, full_name, selected_skill_id } = req.body;

        if (!email || !password || !full_name || !selected_skill_id) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const [skill] = await pool.query(
            "SELECT id FROM skills WHERE id = ?",
            [selected_skill_id]
        );

        if (skill.length === 0) {
            return res.status(400).json({ message: "Invalid skill selected" });
        }

        const hashed = await bcrypt.hash(password, 10);

        const [results] = await pool.query(
            "INSERT INTO users (email, password, full_name, selected_skill_id) VALUES (?, ?, ?, ?)",
            [email, hashed, full_name, selected_skill_id]
        );

        return sendSuccess(
            res,
            201,
            results,
            { message: "User registered successfully" }
        );

    } catch (err) {
        return sendError(res, 500, "Server error", err);
    }
};

exports.loginUsers = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const [results] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (results.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({
            id: user.id,
            role: user.role,
        }, JWT_SECRET, { expiresIn: "30m" });

        return sendSuccess(
                res, 
                200,
                {
                    token,
                    user: {
                        id: user.id,
                        full_name: user.full_name,
                        email: user.email,
                        role: user.role
                    },
                },
                {message: "Login successfully"},
        )

    } catch (err) {
        sendError( res, 500, "Server error", err);
    };
}

exports.getMe = async (req, res) => {
    try {
        const userId = req.user.id;

        const [results] = await pool.query(
            `
                SELECT
                    u.id,
                    u.full_name,
                    u.email,
                    s.skill_name
                FROM users u
                JOIN skills s ON u.selected_skill_id = s.id
                WHERE u.id = ?;
            `,
            [userId]
        );

        if (results.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return sendSuccess(
            res,
            200,
            results[0]
        )
    } catch (err) {
        return sendError(res, 500, "DB Error", err)
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const [rows] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        const user = rows[0];

        if (!user) {
            return sendError(res, 404, "User not found");
        }

        const token = crypto.randomBytes(32).toString("hex");
        const expiry = new Date(Date.now() + 3600000);

        await pool.query(
            "UPDATE users SET reset_token = ?, token_expiry = ? WHERE email = ?",
            [token, expiry, email]
        );

        const resetUrl = `http://localhost:5173/reset-password/${token}`;

        // send email...

        return sendSuccess(
            res,
            200,
            null,
            { message: "Reset password link sent successfully" }
        );

    } catch (err) {
        return sendError(res, 500, "Failed to send reset password email", err);
    }
};

exports.progress = async (req, res) => {
    const { user_id, skill_id, lesson_id, course_id } = req.body;

    if (!user_id || !skill_id || !lesson_id || !course_id) {
        return sendError(res, 400, "Not get the user info");
    }

    try {
        const [result] = await pool.query(`
            INSERT INTO user_lesson_progress (user_id, skill_id, lesson_id, course_id, is_completed)
            VALUES (?, ?, ?, ?, TRUE)
            ON DUPLICATE KEY UPDATE is_completed = TRUE, completed_at = CURRENT_TIMESTAMP;
        `, [user_id, skill_id, lesson_id, course_id]);

        return sendSuccess(res, 200, "Progress updated successfully!")

    } catch (err) {
        console.error("Progress Error:", err);
        return sendError(res, 500, "Server error while saving progress");
    }
};

exports.resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const [rows] = await pool.query(
            "SELECT * FROM users WHERE reset_token = ? AND token_expiry > NOW()",
            [token]
        );

        const user = rows[0];

        if (!user) {
            return sendError(
                res,
                400,
                "Reset link has expired or is invalid"
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            "UPDATE users SET password = ?, reset_token = NULL, token_expiry = NULL WHERE id = ?",
            [hashedPassword, user.id]
        );

        return sendSuccess(
            res,
            200,
            null,
            { message: "Password changed successfully" }
        );

    } catch (err) {
        return sendError(
            res,
            500,
            "Failed to reset password",
            err
        );
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

exports.getCourses = async (req, res) => {
    try {
        const [courses] = await pool.query("SELECT id, course_name FROM courses");
        const [countCourses] = await pool.query("SELECT COUNT(*) AS total FROM courses");

        return sendSuccess(res, 200, courses, { count: countCourses[0].total });
    } catch (err) {
        return sendError(res, 500, "Unable get courses.", err.message);
    }
};

exports.getLessonsWithCourcesId = async (req, res) => {
    try {
        const userId = req.user.id; 

        const [user] = await pool.query(
            "SELECT selected_skill_id FROM users WHERE id = ?",
            [userId]
        );

        if (user.length === 0) {
            return sendError(res, 404, "User not found");
        }

        const skill_id = user[0].selected_skill_id;

        const [GLWCID] = await pool.query(
            `
            SELECT
                c.id,
                c.course_name,
                l.id AS lesson_id,
                l.lesson_name,
                l.course_id,
                IF(ulp.id IS NOT NULL, TRUE, FALSE) AS is_completed
            FROM lessons l
            JOIN courses c ON l.course_id = c.id
            LEFT JOIN user_lesson_progress ulp 
                ON l.id = ulp.lesson_id AND ulp.user_id = ?
            WHERE c.skill_id = ?;
            `,
            [userId, skill_id]
        );

        return sendSuccess(res, 200, GLWCID);
    } catch (err) {
        return sendError(res, 500, "Cannot get lessons.", err.message);
    }
}

exports.getCoursesLessonsByCourcesId = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const [progressResult] = await pool.query(`
            SELECT
                IFNULL(
                    ROUND((COUNT(DISTINCT ulp.lesson_id) / COUNT(DISTINCT l.id)) * 100), 
                    0
                ) AS progress_percent
            FROM lessons l
            LEFT JOIN user_lesson_progress ulp 
                ON l.id = ulp.lesson_id AND ulp.user_id = ?
            WHERE l.course_id = ?;
        `, [userId, id]);

        const courseProgress = progressResult[0]?.progress_percent || 0;

        const [GCL] = await pool.query(`
            SELECT
                l.id AS id,
                l.lesson_name,
                c.course_name,
                l.video_url,
                l.course_id,
                ? AS course_progress,
                IF(ulp.id IS NOT NULL, TRUE, FALSE) AS is_completed
            FROM lessons l
            JOIN courses c ON l.course_id = c.id
            LEFT JOIN user_lesson_progress ulp 
                ON l.id = ulp.lesson_id AND ulp.user_id = ?
            WHERE l.course_id = ?;
        `,
        [courseProgress, userId, id]);

        return sendSuccess(res, 200, GCL);
    } catch (err) {
        return sendError(res, 500, "Can not Get Cources and Lessons", err.message);
    }
}

exports.changeUserProfile = async (req, res) => {
    const userId = req.user.id;
    const { full_name, email } = req.body;

    try {
        const [update] = await pool.query(
            `
            UPDATE users
            SET full_name = ?, email = ?
            WHERE id = ?;
            `,
            [full_name, email, userId]
        );

        return sendSuccess(res, 200, "Updated successfully", update);

    } catch (err) {
        return sendError(res, 500, "Database error", err.message);
    }
};