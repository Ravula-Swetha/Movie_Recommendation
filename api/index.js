const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/recommend", (req, res) => {
  const mood = req.body.mood;
  res.json({ recommendations: ["Movie 1", "Movie 2"], mood });
});

app.listen(3000, () => {
  console.log(`Server running on port https://localhost:3000`);
});
