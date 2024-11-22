import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const   accessKey= process.env.API_KEY;
const   app = express();
const genAI = new GoogleGenerativeAI(accessKey);

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});



app.listen(5000);