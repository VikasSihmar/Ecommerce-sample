const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost:27017/e-comm";
// const DB_URI = "mongodb+srv://vikassihmar:vikassihmar@cluster0.zdmtvra.mongodb.net/Ecommerce-web?retryWrites=true&w=majority"
const ConnectDatabase = () => {

    mongoose.connect(DB_URI).then(
        () => {
            console.log(`database is connected with server`);
        });
}
module.exports = ConnectDatabase;