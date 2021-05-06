const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    dateTime: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    timestamp: {
        type: Date,
        default: Date.now 
    },
    page: {
        type: mongoose.Types.ObjectId,
        ref: "Page"
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event