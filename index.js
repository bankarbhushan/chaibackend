require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hii user this from backend ");
});

// we need to write the "/"
app.get("/ram", (req, res) => {
  res.send("<h1>hiii user your name is ram...</h1>");
});

app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT} `);
});
