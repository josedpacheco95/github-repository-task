const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user-model");
const { filterProps } = require("../../helpers");

exports.postRegister = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      status: 201,
      data: filterProps(user.toJSON(), ["password"]),
    });
  } catch (e) {
    return next(error);
  }
};
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      const error = new Error("Auth error", {
        cause: "Wrong email! Verify your information!",
      });
      error.statusCode = 401;
      throw error;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      const error = new Error("Auth error", {
        cause: "Wrong password! Verify your information!",
      });
      error.statusCode = 401;
      throw error;
    }
    const userId = user.id;
    const expirationTime = 3600 * 48;
    const token = jwt.sign(
      {
        email,
        userId,
      },
      process.env.APP_AUTH_SECRET,
      { expiresIn: `${expirationTime / 3600}h` }
    );
    return res.status(200).json({
      status: 200,
      token,
      expiresIn: expirationTime,
    });
  } catch (e) {
    return next(e);
  }
};
