const qUser = require("../service/userQuery");
const hashService = require("../service/hashService");
const jAuth = require("../service/jwtAuth");
exports.jwtAuthentication = async (req, res, next) => {
  const { name, pass } = req.body;

  const header = req.header.authorization;
  if (!header) {
    next(new Error("Authorization failed"));
  }

  const isChecked = qUser.checkUserByName(name);
  if (isChecked == false) {
    return res.status(400).json({ err: "cant find user" });
  }
  try {
    const hashpass = await hashService.hashPassword(pass);
    const isPassCorrect = await hashService.comparePassword(pass, hashpass);

    if (isPassCorrect == true) {
      jAuth.jwtSign({ name: name, verified: true }, "1h");
    }
  } catch (err) {
    next(err);
  }

  const token = header.split(" ")[1];

  const isVerified = jAuth.jwtVerify(token);
  if (isVerified === true) {
    res.status(200).json({ message: "Login successful" });
  }
};
