const app = require('./app');
const PORT = 4000;
const cloudinary = require("cloudinary");
const ConnectDatabase = require("./database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("Shuting down the server due to Uncaught Exception");

    process.exit(1);
})

// config
if (process.env.Node_ENV !== "PRODUCTION") {
    require('dotenv').config({ path: "bankend/config/config.env" });
}

// database
ConnectDatabase();
cloudinary.config({
    cloud_name: "dmhti93cq",
    api_key: 826593328217469,
    api_secret: "iTt-TwUgjGuPFkIsWYNz2Vaz6cY"
})

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});

// Unhanded Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("Shuting down the server due to Unhandled Pormise Rejection");

    server.close(() => {
        process.exit(1);
    });
})