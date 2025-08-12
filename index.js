import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

if (!process.env.OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY not set in environment variables.');
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/simplify', async (req, res) => {
  try {
    const { medicalNote, language, educationLevel } = req.body;

    if (!medicalNote || !language || !educationLevel) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const prompt = `You are a medical expert who simplifies medical notes for patients. 

Simplify the following medical note into ${language} language, written at the comprehension level of someone with ${educationLevel} education.

Medical Note:
"""${medicalNote}"""

Simplified Explanation:`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 600,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['"""'],
    });

    const simplifiedText = completion.data.choices[0].text.trim();

    res.json({ simplifiedText });
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to simplify medical note' });
  }
});

app.get('/', (req, res) => {
  res.send('MedSpeak Simplifier Backend is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
