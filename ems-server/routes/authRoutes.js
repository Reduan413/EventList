const router = require("express").Router()
const { register, login, all, getUserDataById, updateUserDataByUser} = require("../routeHandler/authHandler")
const { checkLogin } = require("../middlewares/checkAuth")
const fileUpload = require("../middlewares/fileUploader");

router.post("/login", login)
router.post("/register", register)
router.get("/all", checkLogin, all)
router.get("/:id", checkLogin, getUserDataById)
router.put("/:id", checkLogin, fileUpload, updateUserDataByUser)

module.exports = router