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
            message: "Login successfully",
             token,
             user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
             } 
            });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
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

        res.status(200).json(results[0])
    } catch (err) {
        res.status(500).json({ message: "DB Error" })
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
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #0e7490; margin: 0;">Password Reset Request</h2>
                </div>
            
            <p>Hello,</p>
            <p>We received a request to reset the password for your account. Click the button below to choose a new password:</p>
            
            <div style="text-align: center; margin: 35px 0;">
                <a href="${resetUrl}" 
                   style="background-color: #0e7490; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; font-size: 16px;">
                   Reset Password
                </a>
            </div>

            <p style="color: #6b7280; font-size: 14px;">This link will expire in <strong>1 hour</strong> for security reasons.</p>
            
            <p style="color: #6b7280; font-size: 14px;">If you didn't request a password reset, you can safely ignore this email. Your password will remain the same until you create a new one.</p>
            
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">
                If you're having trouble clicking the button, copy and paste the URL below into your web browser:<br>
                <a href="${resetUrl}" style="color: #0e7490; word-break: break-all;">${resetUrl}</a>
            </p>
        </div>
            `
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