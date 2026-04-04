const express = require('express');
const cors = require('cors');
require('dotenv').config();

// router
const adminRoutes = require('./routes/adminRouts');

const app = express();
app.use(express.json());

app.use('/admin', adminRouts);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}...`);
});

