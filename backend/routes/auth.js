const router = require("express").Router();
const authController = require("../controllers/auth");

router.post("/register", authController.registerUser);
router.post("/login", authController.getLoginData);

module.exports = router;
