//a middleware funcation that could display the time.
//Middleware funcations can run before you get into next stage.
//It runs between the req-res loop
const requestTime = function (req, res, next) {
  const now = new Date().toLocaleString("en-CA");
  req.requestTime = now;
  //a third-party funcatinon that continues the req-res loop.
  //Will end if it doesn't exits.
  next();
};
module.exports = requestTime;
