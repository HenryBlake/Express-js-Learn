const express = require("express");
const path = require("path");
const app = express();
const port = 3300;

const requestTime = function (req, res, next) {
  const now = new Date().toLocaleString("en-CA");
  req.requestTime = now;
  next();
};
app.use(requestTime);
//Use this to show the static resources.
// app.use("/page", express.static(path.join(__dirname, "pages")));
app.use(express.static("pages"));

app.get("/", (req, res) => {
  res.send("Elisa is sending her greetings!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/a", (req, res) => {
  res.send("You find me!");
});

//Use the midlleware funcation to get the current Time.
app.get("/time", (req, res) => {
  let timeText = `<h1>${req.requestTime}</h1>`;
  res.send(timeText);
});
app.get("/test", (req, res) => {});
