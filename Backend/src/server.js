// const express = require('express');
import express from 'express';
import { ENV } from './lib/env.js';


const app = express();


// 2. not best practice to use dotenv in server.js but for demo purpose
// console.log(process.env.PORT);   
console.log(ENV.PORT);   
// console.log(process.env.DB_URL);   
console.log(ENV.DB_URL);   

// 1. undefined in terminal if dotenv not configured properly
app.get('/', (req, res) => {
    res.status(200).json({ message: "success from ass" });
});

app.listen(ENV.PORT,() => console.log(`Server running on port ${ENV.PORT}`));