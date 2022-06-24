const express = require("express");
const app = express();

var __dirname = "/Users/yutungliu/Desktop/nodejs";
app.listen(3000, () => {
  console.log("on listen");
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  console.log("GET request");
  //res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log("POST request\n");
  res.send("Thank you for subscribing");
});
