const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//Routes

//Register
router.post("/register", registerController);

//Login
router.post("/login", loginController);

//Get Current User|| GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
