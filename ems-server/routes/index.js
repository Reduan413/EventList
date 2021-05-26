const authRoutes = require("./authRoutes")
const pageRoutes = require("./pageRoutes")
const eventRoutes = require("./eventRoutes")

module.exports = {
    auth: authRoutes,
    page: pageRoutes, 
    event: eventRoutes,
}