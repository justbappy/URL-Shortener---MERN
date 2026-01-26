// internal imports
require('dotenv').config();
const express = require('express');
const app = express();
const cookie_parser = require("cookie-parser");

// external imports
const authRouter = require('./routes/auth.route.js');

// built-in middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookie_parser())

// db connection
require("./db/db.conn.js");

// routes
app.use("/auth", authRouter)

// app listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

