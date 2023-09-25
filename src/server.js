import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './route/webRoute.js';
const app = express();
dotenv.config();

configViewEngine(app);


initWebRoute(app);
const port = process.env.PORT || 4444;
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
});