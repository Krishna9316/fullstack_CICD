const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const MONGO_URI = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/studentdb";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/api", (req, res) => {
  res.json({
    message: "Backend Running Successfully in CICD"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});