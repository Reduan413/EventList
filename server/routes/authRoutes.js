const router = require("express").Router()
const { register, login, all} = require("../routeHandler/authHandler")

router.post("/login", login)
router.post("/register", register)

module.exports = router