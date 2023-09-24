const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.get("Authorization");
  if (!token) {
    const error = new Error("Auth error", {
      cause: "Not Authorized!",
    });
    error.statusCode = 401;
    return next(error);
  }
  [, token] = token.split(" ");
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.APP_AUTH_SECRET);
  } catch (e) {
    error.statusCode = 401;
    return next(error);
  }
  if (!decodedToken) {
    const error = new Error("Auth error", {
      cause: "Not Authorized!",
    });
    error.statusCode = 401;
    return next(error);
  }
  req.userId = decodedToken.userId;
  return next();
};
