const express = require("express");
const { isAuthentiatedUser, authorizedRoles } = require("../middleware/auth");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetail,
    createProductReviews,
    getproductReviews,
    deleteReview,
    getAdminroducts
} = require("../controllers/productController");

const router = express.Router();

router.route('/products').get(getAllProducts);
router
    .route('/admin/products')
    .get(isAuthentiatedUser, authorizedRoles("admin"), getAdminroducts);

router
    .route('/admin/product/new')
    .post(isAuthentiatedUser, authorizedRoles("admin"), createProduct);
router
    .route('/admin/product/:id')
    .put(isAuthentiatedUser, authorizedRoles("admin"), updateProduct)
    .delete(isAuthentiatedUser, authorizedRoles("admin"), deleteProduct)

router.route("/product/:id").get(getProductDetail);
router.route("/review").put(isAuthentiatedUser, createProductReviews);
router.route("/reviews")
    .get(getproductReviews)
    .delete(isAuthentiatedUser, deleteReview);


module.exports = router;