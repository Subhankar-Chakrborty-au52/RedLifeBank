const mongoose = require("mongoose");

//require('dotenv').config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Connected to Mongodb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`);
  }
};

module.exports = dbConnect;


