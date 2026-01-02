// const express = require('express');
import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';

const app = express();

const __dirname = path.resolve();
// 2. not best practice to use dotenv in server.js but for demo purpose
// console.log(process.env.PORT);   
console.log(ENV.PORT);   
// console.log(process.env.DB_URL);   
console.log(ENV.DB_URL);   

// 1. undefined in terminal if dotenv not configured properly
app.get('/health', (req, res) => {
    res.status(200).json({ message: "api is up and running" });
});
app.get('/books', (req, res) => {
    res.status(200).json({ message: "this is the books endpoint" });
});
// make ready for deployment
if (ENV.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../Frontend/dist')));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.resolve(__dirname, '../Frontend', "dist" ,"index.html"));
    });
}

// app.listen(ENV.PORT,() => {
//     console.log(`Server running on port ${ENV.PORT}`);
//     // connect to db
//     connectDB();
// });
const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server running on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
// MvTb56uCEbYc2YS0