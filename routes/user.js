const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {SIGN_UP,LOGIN,GET_USER_BY_ID,GET_USER_WITH_TRIPS,GET_JWT_TOKEN} = require("../controllers/user")

router.post("/signUp", SIGN_UP );
router.post("/logIn", LOGIN);
router.get("/user", authMiddleware, GET_USER_BY_ID);
router.get("/userTrips", authMiddleware, GET_USER_WITH_TRIPS);
router.get("/getJWT/:d", authMiddleware, GET_JWT_TOKEN);

module.exports = router;