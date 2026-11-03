import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8081;

app.get("/", (req, res) => {
  return res.json({ msg: "Hello from the user" });
});

app.listen(PORT, () => {
  console.log(`SERVER is up and ruuning on PORT `);
});
