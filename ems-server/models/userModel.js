const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    phone: String,
    address: String,
    firstName: String,
    lastName: String,
    aboutMe: String,
    password: {
        type: String, 
        required: true
    },
    pagelikes: [{type: mongoose.Types.ObjectId, ref: "Page"}],
    eventInterested: [{type: mongoose.Types.ObjectId, ref: "Event"}],
    eventGoing: [{type: mongoose.Types.ObjectId, ref: "Event"}],
    role: {
        type: String, 
        default: "user" 
    },
    timestamp: {
        type: Date, 
        default: Date.now
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User