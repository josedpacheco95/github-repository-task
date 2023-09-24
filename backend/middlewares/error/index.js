module.exports = (error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode ?? 500;
  return res.status(statusCode).json({
    status: statusCode,
    message: error.message,
    cause: error.cause,
    data: error.data,
  });
};
