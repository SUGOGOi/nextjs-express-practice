import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(4000, () => {
  console.log("Express working on 4000");
});
