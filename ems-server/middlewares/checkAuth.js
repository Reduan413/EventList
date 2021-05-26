const jwt = require("jsonwebtoken");

module.exports = {
    // Authentication Check
    checkLogin: (req, res, next) => {
        const { authorization } = req.headers;
        try {
            const token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { username, userId } = decoded;
            req.username = username;
            req.userId = userId;
            next();
        } catch(err) {
            next("Authentication failed!");
        }
    },

    // Authorization Check
    checkAuth:  (req, res, next) => {
        const userId = req.userId;
        try {
            const token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { username, userId } = decoded;
            req.username = username;
            req.userId = userId;
            next();
        } catch(err) {
            next("Access Denied! Unauthorized User");
        }
    }
}
