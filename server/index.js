// Import all
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/database");

//db connect
dbConnect();


const app = express();


//middlewares
app.use(express.json());



//routes
app.use("/api/v1/auth", require("./routes/authRoutes"))


//Load config file from env
const PORT = process.env.PORT || 5001;


// server connection
app.listen(PORT, () => {
  console.log("server is running successfully");
});
