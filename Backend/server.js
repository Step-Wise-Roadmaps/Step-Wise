require('dotenv').config( {path: '../.env'});
const express = require('express');
const app = express();
const cors = require('cors');

// express use
app.use(cors());
app.use(express.json());

// Routs
const userRouts = require('./routes/userRouts');
// const adminRouts = require('./routes/adminRouts');

// use Routs
app.use('/api/user', userRouts);
// app.use('/api/admin', adminRouts);

// .env PORT
const PORT = process.env.PORT || 5000;
// listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})