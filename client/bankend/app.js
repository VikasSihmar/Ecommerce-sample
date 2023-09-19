const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");


// config
if (process.env.Node_ENV !== "PRODUCTION") {
    require('dotenv').config({ path: "bankend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// import Routes
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/OrderRoute");
const payment = require("./routes//PaymentRoute");
const path = require("path");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../forntend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../forntend/build/index.html"))
})

// Middleware for error
app.use(errorMiddleware);

module.exports = app;