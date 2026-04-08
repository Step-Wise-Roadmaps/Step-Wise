const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        const { email, password, full_name } = req.body;
        const hashed = await bcrypt.hash(password, 10);

        const [results] = await pool.query(
            "INSERT INTO users (email, password, full_name) VALUES (?, ?, ?)",
            [email, hashed, full_name]
        );
        res.status.json({ message: "User registered successful" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}