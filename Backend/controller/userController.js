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
        }, JWT_SECRET, { expiresIn: "2m" });

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
            "SELECT id, full_name, email, role FROM users WHERE id = ?",
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