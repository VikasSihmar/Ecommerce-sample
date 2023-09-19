const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const api = "pk_test_51NkLhhSA7LmtRmhMsILFgXBtcgMyKBDo1mS6RfdjU9t1Be2L7XWbvq8sDwksuJNdMqSHXooA3KrIsXMDfl1CxCoD007tVbKMrk";

const stripeSecretKey = "sk_test_51NkLhhSA7LmtRmhM1m5tDe7WDPtcRKulptMflWuD89LIPeZ3oDC9KlyZEuhOL0IExUVWUlq4mOrE0iRNhUgYC7h100yW0mVnbi";

const stripe = require("stripe")(stripeSecretKey);
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
            company: "Ecommerce",
        },
    });

    res.status(200).json({
        success: true,
        client_secret: myPayment.client_secret
    });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
        stripeApiKey: api,
    });
});