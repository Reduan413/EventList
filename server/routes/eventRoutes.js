const router = require("express").Router()
const { } = require("../routeHandler/pageHandler")

// GET All the Events
router.get("/", )

// GET A Event by ID
router.get("/:id", )

// GET All Events Created via Page 
router.get("/user/:pid", )

// GET All Events Liked by User 
router.get("/follow/:uid", )

// POST A Event
router.post("/", )

// UPDATE A Event
router.put("/:id", )

// DELETE A Event
router.delete("/:id", )

module.exports = router