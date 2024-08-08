const express = require("express");
const router = express.Router();
const { register, login, getUsers } = require("../controllers/users");
const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/list", auth, getUsers);

module.exports = router;
