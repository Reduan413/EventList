const router = require("express").Router()
const { register, login, all} = require("../routeHandler/authHandler")
const { checkLogin } = require("../middlewares/checkAuth")

router.post("/login", login)
router.post("/register", register)
router.get("/all", checkLogin, all)

module.exports = router