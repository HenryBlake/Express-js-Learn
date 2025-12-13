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

//Return user's name base on the id
exports.getNameById = (id) => {
  if (!id) return new Error({ message: "You need an id to continue!" });
  const username = db.find((u) => u.id === id).name;
  if (!username) {
    return new Error({ message: "No userfound" });
  }
  return { username: username };
};
exports.checkUserByName = (name) => {
  if (!db) {
    return new Error("Database is not found");
  }
  if (name === db.find((u) => u.name === name)) {
    return true;
  } else {
    return false;
  }
};
