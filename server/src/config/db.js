const mongoose = require("mongoose");

const env = require("dotenv").config();

let connect = () => {
    return mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@seekho.tahxa.mongodb.net/seekho_db`
    );
};

module.exports = connect;