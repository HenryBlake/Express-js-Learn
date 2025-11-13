const express = require("express");
const path = require("path");
const app = express();
const port = 3300;

app.use(express.json());
//A fake user object.
const users = [
  {
    id: 1,
    name: "admin",
    pass: 123456,
  },
  {
    id: 2,
    name: "Henry",
    pass: 654321,
  },
];
//a middleware funcation that could display the time.
//Middleware funcations can modify the req and res.
const requestTime = function (req, res, next) {
  const now = new Date().toLocaleString("en-CA");
  req.requestTime = now;
  //a third-party funcatinon that continues the req-res loop.
  //Will end if it doesn't exits.
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
//Show how to use http parameters.When parameter's length greater then 6 it will return a 404 staus.
app.get("/user/:id", (req, res) => {
  if (req.params.id.length > 6) {
    return res.status(404).send("Your id is too long to be true.");
  } else {
    res.send(`<h1>Your id is : ${req.params.id}</h1>`);
  }
});

//The way to use middleware functions.
const lengtCheck = function (req, res, next) {
  if (req.params.id.length > 5) {
    return res.status(404).send("Your id length is over");
  }
  next();
};
app.get("/userii/:id", lengtCheck, (req, res) => {
  return res.send(`<h1>Your id is : ${req.params.id}</h1>`);
});
app.get("/username/:name", (req, res) => {
  const user = users.find(
    (u) => u.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
  );
  res.send(`<h1>${user.name}</h1>
    <h1>${user.pass}</h1>`);
});

//Restful ways to get user's info.
//GET
app.get("/api/user/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "Null user" });
  }
  res.json(user);
});

//POST
app.post("/api/users/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    pass: req.bodu.pass,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
