const router = require("express").Router();
const userAuthentication = require("../middleware/authentication");
const cartController = require("../controllers/cart");

router.post("/add", userAuthentication.authenticate, cartController.addCart);
router.put(
  "/update/:id",
  userAuthentication.verifyTokenAndAuthorization,
  cartController.updateCart
);
router.delete(
  "/:id",
  userAuthentication.verifyTokenAndAuthorization,
  cartController.deleteCart
);
router.get(
  "/find/:userId",
  userAuthentication.verifyTokenAndAuthorization,
  cartController.getCart
);
router.get(
  "/",
  userAuthentication.verifyTokenAndAdmin,
  cartController.getAllCart
);

module.exports = router;
