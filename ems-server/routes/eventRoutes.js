const router = require("express").Router()
const { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent} = require("../routeHandler/eventHandler")
const { checkLogin } = require("../middlewares/checkAuth");

// GET All the Events
router.get("/", getAllEvents)

// GET A Event by ID
router.get("/:id", getEventById)

// GET All Events Created via Page 
router.get("/user/:pid", )

// GET All Events Liked by User 
router.get("/follow/:uid", )

// POST A Event
router.post("/", checkLogin, createEvent)

// UPDATE A Event
router.put("/:id", checkLogin, updateEvent)

// DELETE A Event
router.delete("/:id", checkLogin, deleteEvent)

module.exports = router