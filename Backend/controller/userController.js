const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// secret key
const JWT_SECRET = process.env.JWT_SECRET;

// exports.getUsers = async (req, res) => {
//     try {
//         const [results] = await pool.query("SELECT * FROM users");
//         return res.status(200).json(results);
//     } catch (err) {
//         return res.status(500).json({ message: "DB Error" });
//     }
// };

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
            return res.status(400).json({ message: "All fields are required" })
        }

        const hashed = await bcrypt.hash(password, 10);

        const [results] = await pool.query(
            "INSERT INTO users (email, password, full_name, selected_skill_id) VALUES (?, ?, ?, ?)",
            [email, hashed, full_name, selected_skill_id]
        );
        res.status(201).json({ message: "User registered successful" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

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