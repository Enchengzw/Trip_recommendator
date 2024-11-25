import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const   accessKey= process.env.API_KEY;
const   app = express();
const genAI = new GoogleGenerativeAI(accessKey);
app.use(cors({
  origin: '*', // Allow any origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));


const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

app.get('/api/search', async (req, res) => {
    try {
      const query = req.query.query || '';

      let prompt = `Give me a place to visit related to ${query}, please limit yourself to a Name and Coordinates separated by commas`;
      
      const result = await model.generateContent(prompt);  
      res.json(result);
    } catch (error) {
      console.error('Error in /api/search:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
app.listen(5000, '0.0.0.0');