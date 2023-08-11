// Import all
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/database");

//db connect
dbConnect();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory",require("./routes/inventoryRoutes"));


//Load config file from env
const PORT = process.env.PORT || 5001;

// server connection
app.listen(PORT, () => {
  console.log("server is running successfully");
});
