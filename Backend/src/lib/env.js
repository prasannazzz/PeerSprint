import dotenv from 'dotenv';
dotenv.config({quiet: true}); // to avoid warning if .env file is missing
export const ENV ={
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV
    //seems like manager of env variables
}