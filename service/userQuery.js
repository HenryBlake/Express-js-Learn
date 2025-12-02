const db = require("../model/fakeusers.json");

//Check if user exsists.
exports.checkUser = (name, pass) => {
  if (!db) {
    return new Error("Database is not found");
  }
  if (
    name === db.find((u) => u.name === name) &&
    pass === db.find((u) => u.pass === pass)
  ) {
    return true;
  } else {
    return false;
  }
};
