const { validationResult } = require("express-validator");

const { filterProps } = require("../../helpers");

const User = require("../../models/userModel");

exports.getProfile = async (req, res, next) => {
  const userId = Number(req.userId);
  try {
    const user = await User.findByPk(userId);
    const msg = "Profile fetch Sucessfull!";
    console.log(msg);
    res.status(201).json({
      message: msg,
      status: 200,
      data: {
        user: filterProps(user.toJSON(), [
          "password",
          "role",
          "createdAt",
          "updatedAt",
        ]),
      },
    });
  } catch (error) {
    error.message = `Profile fetch Error: ${error.message}`;
    next(error);
  }
};

exports.putEditProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Profile edit  Error", {
      cause: "Validation failed.",
    });
    error.statusCode = 422;
    error.data = errors.array();
    return next(error);
  }
  const updateUser = req.body;
  if (req.file) {
    updateUser[req.file.fieldname] = req.file.location;
  }
  const userId = Number(req.userId) || 17;
  try {
    const user = await User.findByPk(userId);
    user.set(updateUser);
    await user.save();
    const msg = "Profile edit Sucessfull!";
    res.status(201).json({
      message: msg,
      status: 200,
      data: {
        user: filterProps(user.toJSON(), [
          "password",
          "role",
          "createdAt",
          "updatedAt",
        ]),
      },
    });
  } catch (error) {
    error.message = `Profile edit Error: ${error.message}`;
    next(error);
  }
};

exports.getAgents = async (req, res, next) => {
  try {
    if (req.params.agentId) {
      const id = parseInt(req.params.agentId);
      const agent = await User.findByPk(id);
      res.status(200).json({
        status: 200,
        data: {
          agent,
        },
      });
    } else {
      const { page } = req.query;
      const { rows, count } = await User.findAndCountAll({
        offset: 0 + (parseInt(page) - 1) * 6,
        limit: 6,
      });
      res.status(200).json({
        status: 200,
        data: {
          agents: rows,
          total: count,
        },
      });
    }
  } catch (error) {
    error.message = `Getting Agents List error: ${error.message}`;
    next(error);
  }
};

exports.postAgent = async (req, res, next) => {
  const body = req.body;
  if (req.file) {
    body[req.file.fieldname] = req.file.location;
  }
  try {
    const user = await User.findOne({ where: { email: body.email } });
    if (user)
      res.status(500).json({
        message: "Esta correo electronico ya ha sido utilizado",
        statusCode: 500,
      });
    const agent = await User.create(body);
    res.status(201).json({ message: agent, statusCode: 201 });
  } catch (error) {
    error.message = `Create Agent Error: ${error.message}`;
    next(error);
  }
};
