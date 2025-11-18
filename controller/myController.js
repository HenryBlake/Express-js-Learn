const express = require("express");
//Sending the basic texts.
exports.defualt = async (req, res, next) => {
  res.send("Elisa is sending her greetings!");
};

//Sending current time.
exports.getTime = async (req, res, next) => {
  const now = new Date().toLocaleString("en-CA");
  req.requestTime = now;
  //a third-party funcatinon that continues the req-res loop.
  //Will end if it doesn't exits.
  let timeText = `<h1>${req.requestTime}</h1>`;
  res.send(timeText);
};

//Ceck the id length. If it is too long, returm a 404 status.
exports.checkIdLength = async (req, res, next) => {
  if (req.params.id.length > 6) {
    return res.status(404).send("Your id is too long to be true.");
  } else {
    res.send(`<h1>Your id is : ${req.params.id}</h1>`);
  }
};

//Get the iformantions from fakeusers.json according th name it provides.
exports.getUserInfo = async (req, res, next) => {
  const user = users.find(
    (u) => u.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
  );
  res.send(`<h1>${user.name}</h1>
    <h1>${user.pass}</h1>`);
};
