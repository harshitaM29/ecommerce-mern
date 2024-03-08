const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    const userInfo = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(userInfo.id);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  authenticate(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  authenticate(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  authenticate,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
