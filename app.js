import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido al e-commerce");
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
