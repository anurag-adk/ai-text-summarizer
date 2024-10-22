const express = require("express");
const summarizeText = require("./summarize.js");
require("dotenv").config();

const PORT = process.env.PORT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const app = express();
app.use(express.json());
app.use(express.static("public")); // Serve static files from public

app.post("/summarize", (req, res) => {
  const text = req.body.text_to_summarize;
  //   console.log(text);

  // call summarize func and pass text from req
  summarizeText(text)
    .then((response) => {
      res.send(response); // send sumary as res
    })
    .catch((error) => {
      console.log(error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
