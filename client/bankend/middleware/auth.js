const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "vikassihmar";
const User = require("../modals/userModal");

exports.isAuthentiatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("Pleace login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
});

exports.authorizedRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403));
        };
        next();
    };
};   