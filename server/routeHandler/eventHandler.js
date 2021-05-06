const Event = require("../models/eventModel");

module.exports = {
    getAllEvents: (req, res) => {
        Event.find({})
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

    getPageById: async (req, res) => {
        try {
            const data = await Page.find({ _id: req.params.id });
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

    createPage: async (req, res) => {
        const newPage = new Page({
          ...req.body,
          admin: req.userId
        });
      
        try {
          const page = await newPage.save();
      
          res.status(200).json({
            message: "Page was created successfully!",
          });
        } catch(err) {
          console.log(err);
          res.status(500).json({
            error: "There was a server side error!",
          });
        }
    },

    updatePage: (req, res) => {
        const result = Page.findByIdAndUpdate(
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
                message: "Page was updated successfully!",
                res: result
              });
            }
          }
        );
    },

    deletePage: (req, res) => {
        Page.deleteOne({ _id: req.params.id }, (err) => {
          if (err) {
            res.status(500).json({
              error: "There was a server side error!",
            });
          } else {
            res.status(200).json({
              message: "Page was deleted successfully!",
            });
          }
        });
    },


}
