const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid:${err.path}`;
        err = new ErrorHandler(message, 400);
    };

    // mongoose duplicate key Err
    if (err.code === 11000) {
        const message = `Duplicate ${Object.key(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }
     // Wrong jwt Err
     if (err.code === "jsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again`;
        err = new ErrorHandler(message, 400);
    }
       // Wrong jwt Expire
       if (err.code === "jsonWebTokenError") {
        const message = `Json Web Token is expired, Try again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        error: err.message
    });
};
