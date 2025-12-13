const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const router = require("./router/myRouters");
const newRouter = require("./router/newRouter");
const errHandler = require("./middleware/generalErrHandler");

//Start point of defualt.
app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});
//There are the modules or the middleware functions that I need.
// app.use("/myrouter", router);
app.get("/errtest", (req, res, next) => {
  next(new Error("Test error"));
});
app.use("/new", newRouter);

app.use(express.json());

//Use this to show the static resources.
// app.use("/page", express.static(path.join(__dirname, "pages")));
app.use(express.static("pages"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//This is a general error handler which return a obj when error occurs.
app.use(errHandler.default);
//From here is legacy sinppet of code.

// //Use the midlleware funcation to get the current Time.
// app.get("/time", (req, res) => {
//   let timeText = `<h1>${req.requestTime}</h1>`;
//   res.send(timeText);
// });

//Show how to use http parameters.When parameter's length greater then 6 it will return a 404 staus.
// app.get("/user/:id", (req, res) => {
//   if (req.params.id.length > 6) {
//     return res.status(404).send("Your id is too long to be true.");
//   } else {
//     res.send(`<h1>Your id is : ${req.params.id}</h1>`);
//   }
// });

//Other ways to check length
// const lengthCheck = function (req, res, next) {
//   if (req.params.id.length > 5) {
//     return res.status(404).send("Your id length is over");
//   }
//   next();
// };
// app.get("/userii/:id", lengthCheck, (req, res) => {
//   return res.send(`<h1>Your id is : ${req.params.id}</h1>`);
// });
// app.get("/username/:name", (req, res) => {
//   const user = users.find(
//     (u) => u.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
//   );
//   res.send(`<h1>${user.name}</h1>
//     <h1>${user.pass}</h1>`);
// });

//Restful ways to get user's info.
//GET
// app.get("/api/user/:id", (req, res) => {
//   const user = users.find((u) => u.id === parseInt(req.params.id));
//   if (!user) {
//     return res.status(404).json({ message: "Null user" });
//   }
//   res.json(user);
// });

// //POST
// app.post("/api/users/", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     pass: req.bodu.pass,
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });
