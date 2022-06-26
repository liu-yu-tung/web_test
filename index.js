const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var __dirname = "/Users/yutungliu/Desktop/nodejs";
app.listen(3000, () => {
  console.log("on listen");
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("GET request");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var subName = req.body.yourname;
  var subEmail = req.body.youremail;
  res.send("Thank you for subscribing. Your email is " + subEmail);
  console.log(req.body);
});
