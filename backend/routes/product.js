const router = require("express").Router();
const authentication = require("../middleware/authentication");
const productController = require("../controllers/product");

router.post(
  "/add",
  authentication.verifyTokenAndAdmin,
  productController.addProduct
);

router.put(
  "update/:id",
  authentication.verifyTokenAndAdmin,
  productController.updateProduct
);

router.delete(
  "/:id",
  authentication.verifyTokenAndAdmin,
  productController.deleteProduct
);

router.get("find/:id", productController.getProduct);
router.get("/", productController.getAllProduct);
module.exports = router;
