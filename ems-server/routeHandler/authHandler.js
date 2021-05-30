const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = {
  // SIGN UP
  register: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({
        message: "Signup was successful!",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Signup failed!",
      });
    }
  },

  // LOGIN
  login: async (req, res) => {
    try {
      const user = await User.find({ username: req.body.username });
      if (user && user.length > 0) {
        const isValidPassword = await bcrypt.compare(
          req.body.password,
          user[0].password
        );

        if (isValidPassword) {
          // generate token
          const token = jwt.sign(
            {
              username: user[0].username,
              userId: user[0]._id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );

          res.status(200).json({
            access_token: token,
            message: "Login successful!",
          });
        } else {
          res.status(401).json({
            error: "Authetication failed!",
          });
        }
      } else {
        res.status(401).json({
          error: "Authetication failed!",
        });
      }
    } catch {
      res.status(401).json({
        error: "Authetication failed!",
      });
    }
  },

  // Update User Data By User
  updateUserDataByUser: async (req, res) => {
    const user = User.find({ _id: req.params.id });
    const userData = user[0];
    const result = Event.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username ? req.body.username : userData.username,
          email: req.body.email ? req.body.email : userData.email,
          phone: req.body.phone ? req.body.phone : userData.phone,
          address: req.body.address ? req.body.address : userData.address,
          firstName: req.body.firstName
            ? req.body.firstName
            : userData.firstName,
          lastName: req.body.lastName ? req.body.lastName : userData.lastName,
          aboutMe: req.body.aboutMe ? req.body.aboutMe : userData.aboutMe,
          password: req.body.password
            ? await bcrypt.hash(req.body.password, 10)
            : userData.password,
          img: req.file ? req.file.filename : userData.img,
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
            message: "User was updated successfully!",
            res: result,
          });
        }
      }
    );
  },

  getUserDataById: async (req, res) => {
    try {
      const data = await User.find({ _id: req.params.id }).populate("page");
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

  // ALL USER
  all: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json({
        data: users,
        message: "Success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "There was an error on the server side!",
      });
    }
  },
};
