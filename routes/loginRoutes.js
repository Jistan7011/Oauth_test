const express = require("express");
const router = express.Router();
const {getLogin, logout, getJoin} = require("../controllers/loginController")


router.route("/").get(getLogin)

//router.route("/logout").get(logout)

// router.route("/join").get(getJoin)

module.exports = router;
