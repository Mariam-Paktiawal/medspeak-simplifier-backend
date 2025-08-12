import express from "express";
import cors from "cors";
import { HfInference } from "@huggingface/inference";

const app = express();
app.use(cors());
app.use(express.json());

const hf = new HfInference();

app.post("/simplify", async (req, res) => {
  try {
    const { text, language, educationLevel } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const prompt = `Simplify the following medical text for a ${educationLevel} in ${language}:\n\n${text}`;

    const output = await hf.textGeneration({
      model: "google/t5-small-lm-adapt",
      inputs: prompt,
      parameters: { max_new_tokens: 100, do_sample: false },
    });

    res.json({ simplifiedText: output.generated_text || "No simplification available." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to simplify text" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
