function generalHandler(err, req, res, next) {
  var statusCode = err.status;
  if (!statusCode) {
    statusCode = 500;
  }
  res.status(statusCode).json({
    status: statusCode,
    type: "Error",
    message: err.message,
  });
}

export default generalHandler;
