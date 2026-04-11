const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');
const nodemailer = require('nodemailer');

// secret key
const JWT_SECRET = process.env.JWT_SECRET;

exports.getUsers = async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM users");
        return res.status(200).json(results);
    } catch (err) {
        return res.status(500).json({ message: "DB Error" });
    }
};

exports.getMe = async (req, res) => {
    try {
        const userId = req.user.id;

        const [results] = await pool.query(
            "SELECT id, full_name, email FROM users WHERE id = ?",
            [userId]
        );

        if (results.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(results[0])
    } catch (err) {
        res.status(500).json({ message: "DB Error" })
    }
}

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

        // 🔥 STEP 2: hash password
        const hashed = await bcrypt.hash(password, 10);

        // 🔥 STEP 3: insert user
        const [results] = await pool.query(
            "INSERT INTO users (email, password, full_name, selected_skill_id) VALUES (?, ?, ?, ?)",
            [email, hashed, full_name, selected_skill_id]
        );

        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
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

        res.status(200).json({ 
            message: "Login successfully", token, role: user.role});

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        const user = rows[0];

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiry = new Date(Date.now() + 3600000);

        await pool.query(
            "UPDATE users SET reset_token = ?, token_expiry = ? WHERE email = ?",
            [token, expiry, email]
        );

        const resetUrl = `http://localhost:5173/reset-password/${token}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({    
            to: email,
            subject: "Reset Password Link",
            html: `<h3>To Change Password Click This Link</h3>
                   <a href="${resetUrl}">${resetUrl}</a>
                   <p>1hr</p>`
        });

        res.status(200).json({ message: "the like is send it" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error ..." });
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
            return res.status(400).json({ message: "the Link is expaired or not correct" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            "UPDATE users SET password = ?, reset_token = NULL, token_expiry = NULL WHERE id = ?",
            [hashedPassword, user.id]
        );

        res.status(200).json({ message: "Password changed" });

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};