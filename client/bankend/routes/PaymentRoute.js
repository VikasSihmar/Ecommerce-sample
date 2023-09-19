const express = require("express");
const router = express.Router();
const { isAuthentiatedUser } = require("../middleware/auth");
const { processPayment, sendStripeApiKey } = require("../controllers/paymentController");

router.route('/payment/process').post(isAuthentiatedUser, processPayment);
router.route('/stripeapikey').get(isAuthentiatedUser, sendStripeApiKey);


module.exports = router;