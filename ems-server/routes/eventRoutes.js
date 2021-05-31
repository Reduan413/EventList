const router = require("express").Router();
const {
  getAllEvents,
  getEventById,
  getEventLikedByUser,
  createEvent,
  updateEvent,
  deleteEvent,
  interestInEvent,
  unInterestInEvent,
  goingToEvent,
  notGoingToEvent,
} = require("../routeHandler/eventHandler");
const { checkLogin } = require("../middlewares/checkAuth");
const fileUpload = require("../middlewares/fileUploader");

// GET All the Events
router.get("/", getAllEvents);

// GET All Events Followed by User
router.get("/follows", checkLogin, getEventLikedByUser);

// GET A Event by ID
router.get("/:id", checkLogin, getEventById);

// POST A Event
router.post("/", checkLogin, fileUpload, createEvent);

// UPDATE A Event
router.put("/:id", checkLogin, fileUpload, updateEvent);

// DELETE A Event
router.delete("/:id", checkLogin, deleteEvent);

// Interest in an Event
router.put("/interest/:id", checkLogin, interestInEvent);

// UnIntereset in an Event
router.put("/uninterest/:id", checkLogin, unInterestInEvent);

// Going to an Event
router.put("/going/:id", checkLogin, goingToEvent);

// NotGoing to an Event
router.put("/notgoing/:id", checkLogin, notGoingToEvent);

module.exports = router;
