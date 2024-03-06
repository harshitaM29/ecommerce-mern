const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/register", userController.registerUser);
router.post("/login", userController.getLoginData);

module.exports = router;
