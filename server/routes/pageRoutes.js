const router = require("express").Router()
const { createPage, getAllPages, getPageById, updatePage, deletePage } = require("../routeHandler/pageHandler")
const { checkLogin } = require("../middlewares/checkAuth");

// GET All the Pages
router.get("/", getAllPages)

// GET Page by ID
router.get("/:id", getPageById)

// GET All Pages Created by User 
router.get("/user/:uid", )

// GET All Pages Followed by User 
router.get("/follow/:uid", )

// POST A Page
router.post("/", checkLogin, createPage)

// UPDATE A Page
router.put("/:id", checkLogin, updatePage)

// DELETE A Page
router.delete("/:id", checkLogin, deletePage)

module.exports = router