const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

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