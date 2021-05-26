const mongoose = require('mongoose')

const pageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    img: String,
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    likes: [{type: mongoose.Types.ObjectId, ref: "User"}],
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