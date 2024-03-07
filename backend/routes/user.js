const router = require("express").Router();
const userController = require("../controllers/user");
const {
  authenticate,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/authentication");

router.get(
  "/stats",
  authenticate,
  verifyTokenAndAdmin,
  userController.getStats
);

module.exports = router;
