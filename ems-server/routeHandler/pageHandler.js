const Page = require("../models/pageModel");
const User = require("../models/userModel");

module.exports = {
  getAllPages: (req, res) => {
    Page.find({})
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
      const data = await Page.find({ _id: req.params.id }).populate("admin");
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
      name: req.body.name,
      description: req.body.description,
      img: req.file ? req.file.filename : null,
      admin: req.userId,
      status: 'active'
    });

    try {
      const page = await newPage.save();

      res.status(200).json({
        message: "Page was created successfully!",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  updatePage: async (req, res) => {
    const page = Page.find({ _id: req.params.id });
    const pageData = page[0];
    const result = Page.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name ? req.body.name : pageData.name,
          description: req.body.description
            ? req.body.description
            : pageData.description,
          img: req.file ? req.file.filename : pageData.img,
          status: req.body.status ? req.body.status : pageData.status,
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
            res: result,
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

  getPagesCreatedByUser: async (req, res) => {
    try {
      const data = await Page.find({ admin: req.userId }).populate("admin");
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

  getPagesLikedByUser: async (req, res) => {
    try {
      const pageData = await Page.find({ likes: req.userId }).select({
        likes: 0,
        __v: 0,
      });
      res.status(200).json({
        result: pageData,
        message: "Success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  likePage: async (req, res) => {
    try {
      const page = await Page.find({ _id: req.params.id });
      const pageLikes = page[0].likes;
      const pageLiked = pageLikes.indexOf(req.userId) > -1 ? true : false;

      console.log(pageLiked);

      if (pageLiked) {
        res.status(200).json({
          message: "Page is already liked!",
        });
      } else {
        const pageResult = await Page.findByIdAndUpdate(
          req.params.id,
          {
            $addToSet: { likes: req.userId },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        const userResult = await User.findByIdAndUpdate(
          req.userId,
          {
            $addToSet: { pagelikes: req.params.id },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        res.status(200).json({
          message: "Page was liked successfully!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "There was a server side error!",
      });
    }
  },

  unlikePage: async (req, res) => {
    try {
      const page = await Page.find({ _id: req.params.id });
      const pageLikes = page[0].likes;
      const pageLiked = pageLikes.indexOf(req.userId) > -1 ? true : false;

      console.log(pageLiked);

      if (pageLiked) {
        const pageResult = await Page.findByIdAndUpdate(
          req.params.id,
          {
            $pull: { likes: req.userId },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        const userResult = await User.findByIdAndUpdate(
          req.userId,
          {
            $pull: { pagelikes: req.params.id },
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );

        res.status(200).json({
          message: "Page was unliked successfully!",
        });
      } else {
        res.status(200).json({
          message: "Page was not liked!",
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
