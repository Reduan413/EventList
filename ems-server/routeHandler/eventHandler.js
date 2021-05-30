const ObjectId = require("mongodb").ObjectID;
const Event = require("../models/eventModel");

module.exports = {
  getAllEvents: (req, res) => {
    Event.find({})
      .populate("page")
      .populate("admin", "username -_id")
      .select({
        __v: 0,
        date: 0,
      })
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            result: data,
            message: "Success",
          });
        }
      });
  },

  getEventById: async (req, res) => {
    try {
      const data = await Event.find({ _id: req.params.id })
        .populate("page")
        .populate("author");
      res.status(200).json({
        result: data,
        message: "Success",
      });
    } catch (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  getEventCreatedByPage: async (req, res) => {
    try {
      console.log(req.body.pid)
      const data = await Event.find({ page: req.body.pid }).populate("admin");
      res.status(200).json({
        result: data,
        message: "Success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  createEvent: async (req, res) => {
    console.log(req.body);
    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      dateTime: req.body.dateTime ? req.body.dateTime : null,
      img: req.file ? req.file.filename : null,
      location: req.body.location,
      page: req.body.pageId,
      author: req.userId,
      status: "active",
    });

    try {
      const event = await newEvent.save();

      res.status(200).json({
        message: "Event was created successfully!",
        result: event,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  updateEvent: async (req, res) => {
    const id = req.params.id;
    let updatedEvent = {
      ...req.body,
      img: req.file ? req.file.filename : null,
    }

    console.log('file is', req.file)
    
    try {
       let event = await Event.findOneAndUpdate(
				{ _id: id },
				updatedEvent,
				{ upsert: true, new: true }
			);
			res.send(event);
    } catch(err) {
      console.log(err)
      res.status(500).send(err)
    }
  },

  // updateEvent: async (req, res) => {
  //   const id = req.params.id;
  //   const event = Event.find({ _id: id });
  //   const eventData = event[0];

  //   const result = Event.findByIdAndUpdate(
  //     { _id: id },
  //     {
  //       $set: {
  //         title: req.body.title ? req.body.title : eventData.title,
  //         description: req.body.description
  //           ? req.body.description
  //           : eventData.description,
  //         date: req.body.date ? req.body.date : eventData.date,
  //         img: req.file ? req.file.filename : eventData.img,
  //         location: req.body.location ? req.body.location : eventData.location,
  //         status: req.body.status ? req.body.status : eventData.status,
  //       },
  //     },
  //     {
  //       new: true,
  //       useFindAndModify: false,
  //     },
  //     (err) => {
  //       if (err) {
  //         res.status(500).json({
  //           error: "There was a server side error!",
  //         });
  //       } else {
  //         res.status(200).json({
  //           message: "Event was updated successfully!",
  //           res: result,
  //         });
  //       }
  //     }
  //   );
  // },

  deleteEvent: (req, res) => {
    Event.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Event was deleted successfully!",
        });
      }
    });
  },

  getEventLikedByUser: async (req, res) => {
    try {
      const eventData = await Event.find({
        $or: [{ interested: req.userId }, { going: req.userId }],
      }).select({
        likes: 0,
        __v: 0,
      });
      res.status(200).json({
        result: eventData,
        message: "Success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  interestInEvent: async (req, res) => {
    try {
      const event = await Event.find({ _id: req.params.id });
      const eventData = event[0];
      const eventInterested =
        eventData.interested.indexOf(req.userId) > -1 ? true : false;
      const eventGoing =
        eventData.going.indexOf(req.userId) > -1 ? true : false;

      console.log(eventInterested);

      if (eventInterested) {
        res.status(200).json({
          message: "Event is already interested!",
        });
      } else {
        // if user already has selected event GOING, then first remove the GOING
        if (eventGoing) {
          await Event.findByIdAndUpdate(
            req.params.id,
            {
              $pull: { going: req.userId },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );

          await User.findByIdAndUpdate(
            req.userId,
            {
              $pull: { eventGoing: req.params.id },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );
        }

        const eventResult = await Event.findByIdAndUpdate(
          req.params.id,
          {
            $addToSet: { interested: req.userId },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        const userResult = await User.findByIdAndUpdate(
          req.userId,
          {
            $addToSet: { eventInterested: req.params.id },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        res.status(200).json({
          message: "Event was interested successfully!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  unInterestInEvent: async (req, res) => {
    try {
      const event = await Event.find({ _id: req.params.id });
      const eventInterests = event[0].interested;
      const eventInterested =
        eventInterests.indexOf(req.userId) > -1 ? true : false;

      console.log(eventInterested);

      if (eventInterested) {
        const eventResult = await Event.findByIdAndUpdate(
          req.params.id,
          {
            $pull: { interested: req.userId },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        const userResult = await User.findByIdAndUpdate(
          req.userId,
          {
            $pull: { eventInterested: req.params.id },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        res.status(200).json({
          message: "Event was uninterested successfully!",
        });
      } else {
        res.status(200).json({
          message: "Event was not uninterested!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  goingToEvent: async (req, res) => {
    try {
      const event = await Event.find({ _id: req.params.id });
      const eventData = event[0];
      const eventInterested =
        eventData.interested.indexOf(req.userId) > -1 ? true : false;
      const eventGoing =
        eventData.going.indexOf(req.userId) > -1 ? true : false;

      console.log(eventGoing);

      if (eventGoing) {
        res.status(200).json({
          message: "Event is already going!",
        });
      } else {
        // if user already has selected event INTERESTED, then first remove the INTERESTED
        if (eventInterested) {
          await Event.findByIdAndUpdate(
            req.params.id,
            {
              $pull: { interested: req.userId },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );

          await User.findByIdAndUpdate(
            req.userId,
            {
              $pull: { eventInterested: req.params.id },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );
        }

        const eventResult = await Event.findByIdAndUpdate(
          req.params.id,
          {
            $addToSet: { going: req.userId },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        const userResult = await User.findByIdAndUpdate(
          req.userId,
          {
            $addToSet: { eventGoing: req.params.id },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        res.status(200).json({
          message: "Event was Going successfully!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  notGoingToEvent: async (req, res) => {
    try {
      const event = await Event.find({ _id: req.params.id });
      const eventGoings = event[0].going;
      const eventGoing = eventGoings.indexOf(req.userId) > -1 ? true : false;

      console.log(eventGoing);

      if (eventGoing) {
        const eventResult = await Event.findByIdAndUpdate(
          req.params.id,
          {
            $pull: { going: req.userId },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        const userResult = await User.findByIdAndUpdate(
          req.userId,
          {
            $pull: { eventGoing: req.params.id },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        res.status(200).json({
          message: "Event was removed going successfully!",
        });
      } else {
        res.status(200).json({
          message: "Event was going already removed!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },
};
