const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secrte = process.env.JWT_SECRTE;
exports.jwtSign = (token, expire) => {
  jwt.sign(token, secrte, expire, (err, decode) => {
    if (err) return err;
  });
};

exports.jwtVerify = (token) => {
  jwt.verify(token, secrte, (err, decoded) => {
    if (err) return err;
  });
};
