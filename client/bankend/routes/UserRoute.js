const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetail, updatePassword, updateProfile, getAllUsers, getSigleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthentiatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logout);
router.route('/me').get(isAuthentiatedUser, getUserDetail);
router.route('/password/update').put(isAuthentiatedUser, updatePassword);
router.route('/me/update').put(isAuthentiatedUser, updateProfile);
router.route('/admin/users').get(isAuthentiatedUser, authorizedRoles("admin"), getAllUsers);
router.route('/admin/user/:id')
    .get(isAuthentiatedUser, authorizedRoles("admin"), getSigleUser)
    .put(isAuthentiatedUser, authorizedRoles("admin"), updateUserRole)
    .delete(isAuthentiatedUser, authorizedRoles("admin"), deleteUser);

module.exports = router;