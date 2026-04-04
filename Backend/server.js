const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());



app.listen( 5000, () => console.log("Server running on port http://localhost:5000"));

