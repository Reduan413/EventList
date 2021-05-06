const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone: String,
    address: String,
    firstName: String,
    lastName: String,
    password: {
        type: String, 
        required: true
    },
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