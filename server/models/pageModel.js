const mongoose = require('mongoose')

const pageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    timestamp: {
        type: Date,
        default: Date.now 
    },
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const Page = mongoose.model("Page", pageSchema)

module.exports = Page