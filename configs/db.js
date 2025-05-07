const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.DBURL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.log("Thw connection is refused: " + err.message);
        process.exit(1);
    }
}

module.exports =  connectDB;