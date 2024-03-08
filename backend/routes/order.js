const router = require("express").Router();
const userAuthentication = require("../middleware/authentication");
const orderController = require("../controllers/order");

router.post("/add", userAuthentication.authenticate, orderController.addOrder);
router.put(
  "/update/:id",
  userAuthentication.verifyTokenAndAdmin,
  orderController.updateOrder
);
router.delete(
  "/:id",
  userAuthentication.verifyTokenAndAdmin,
  orderController.deleteOrder
);
router.get(
  "/find/:userId",
  userAuthentication.verifyTokenAndAuthorization,
  orderController.getOrder
);
router.get(
  "/",
  userAuthentication.verifyTokenAndAdmin,
  orderController.getAllOrder
);

router.get(
  "/income",
  userAuthentication.verifyTokenAndAdmin,
  orderController.getMonthlyIncome
);

module.exports = router;
