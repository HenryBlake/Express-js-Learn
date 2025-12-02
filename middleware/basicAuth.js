const userChecker = require("../service/userQuery");
exports.basicAuth = (req, res, next) => {
  const header = res.header.Authorization;
  if (!header) {
    res.set("WWW-Authentication", "Basic realm='Dude you need an auth!'");
    res.satuts(401).send("YOu need an authentication to keep on.");
  }
  const base64 = header.split(" ")[1];
  const userBase = base64.split(":");

  const [name, pass] = atob(userBase);

  const isChecked = userChecker(name, pass);

  if (isChecked === true) {
    next();
  } else {
    res.satuts(401).send("YOu need an authentication to keep on.");
  }
};
