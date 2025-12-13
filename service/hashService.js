const bcrypt = require("bcrypt");
const saltRound = 10;

exports.hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRound);
  if (!hash) return new Error({ message: "Failed to get hash!" });
  return hash;
};

exports.comparePassword = async (password, hashPassword) => {
  const isRight = await bcrypt.compare(password, hashPassword);
  if (!isRight) return new Error({ message: "Password is not match" });
  return isRight;
};
