const express = require("express");
const { isAuthentiatedUser, authorizedRoles } = require("../middleware/auth");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateorderStatus, deleteOrder } = require("../controllers/orderController");

const router = express.Router();


router.route('/order/new').post(isAuthentiatedUser, newOrder);
router
    .route('/order/:id')
    .get(isAuthentiatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthentiatedUser, myOrders);
router.route('/admin/orders').get(isAuthentiatedUser, authorizedRoles("admin"), getAllOrders);
router
    .route('/admin/order/:id')
    .put(isAuthentiatedUser, authorizedRoles("admin"), updateorderStatus)
    .delete(isAuthentiatedUser, authorizedRoles("admin"), deleteOrder);




module.exports = router;