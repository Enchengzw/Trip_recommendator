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

const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
console.log(result.response.text());

app.listen(5000);