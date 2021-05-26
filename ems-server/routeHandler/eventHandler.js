const Event = require("../models/eventModel");

module.exports = {
    getAllEvents: (req, res) => {
        Event.find({})
            .populate("page" )
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
            const data = await Event.find({ _id: req.params.id }).populate("page").populate("admin");
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

    createEvent: async (req, res) => {
        const newEvent = new Event({
          ...req.body,
          author: req.userId
        });
      
        try {
          const event = await newEvent.save();
      
          res.status(200).json({
            message: "Event was created successfully!",
            result: event
          });
        } catch(err) {
          console.log(err);
          res.status(500).json({
            error: "There was a server side error!",
          });
        }
    },

    updateEvent: (req, res) => {
        const result = Event.findByIdAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              status: "active",
            },
          },
          {
            new: true,
            useFindAndModify: false,
          },
          (err) => {
            if (err) {
              res.status(500).json({
                error: "There was a server side error!",
              });
            } else {
              res.status(200).json({
                message: "Event was updated successfully!",
                res: result
              });
            }
          }
        );
    },

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


}
