const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Corrected MongoDB Connection URI
const MONGO_URI = "mongodb://localhost:27017/loki"; 

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Schema & Model
const birthDeathSchema = new mongoose.Schema({
  Period: Number,
  Birth_Death: String, 
  Region: String,
  Count: Number
});

const BirthDeath = mongoose.model("BirthDeath", birthDeathSchema);


app.get("/data", async (req, res) => {
  try {
    const data = await BirthDeath.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port http://localhost:${PORT}");
});