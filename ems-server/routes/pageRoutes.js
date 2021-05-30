const router = require("express").Router();
const {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
  getPagesCreatedByUser,
  getPagesLikedByUser,
  likePage,
  unlikePage,
} = require("../routeHandler/pageHandler");
const { getEventCreatedByPage } = require("../routeHandler/eventHandler");
const { checkLogin } = require("../middlewares/checkAuth");
const fileUpload = require("../middlewares/fileUploader");

// GET All the Pages
router.get("/", getAllPages);

// GET All Pages Created by User
router.get("/mypage", checkLogin, getPagesCreatedByUser);

// GET All Pages Followed by User
router.get("/follows", checkLogin, getPagesLikedByUser);

// GET All Events Created by Page
router.post("/events", checkLogin, getEventCreatedByPage);

// GET Page by ID
router.get("/:id", getPageById);

// POST A Page
router.post("/", checkLogin, fileUpload, createPage);

// UPDATE A Page [have to do]
router.put("/:id", checkLogin, fileUpload, updatePage);

// DELETE A Page
router.delete("/:id", checkLogin, deletePage);

// Like A Page
router.put("/like/:id", checkLogin, likePage);

// Unlike A Page
router.put("/unlike/:id", checkLogin, unlikePage);

module.exports = router;
