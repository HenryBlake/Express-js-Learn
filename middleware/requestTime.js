//a middleware funcation that could display the time.
//Middleware funcations can run before you get into next stage.
//It runs between the req-res loop
const requestTime = async (req, res, next) => {
  const now = new Date().toLocaleString("en-CA");
  req.requestTime = now;
  //a third-party funcatinon that continues the req-res loop.
  //Will end if it doesn't exits.
  let timeText = `<h1>${req.requestTime}</h1>`;
  res.send(timeText);
  next();
};
module.exports = requestTime;
