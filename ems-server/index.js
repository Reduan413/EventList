require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { auth, page, event } = require("./routes/index")

// express app initialization
const app = express()
app.use(express.json())
app.use(cors())

// database connection wit mongoose
mongoose
    .connect('mongodb://localhost/ems', { 
        useCreateIndex: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true  
    } )
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log(err))

// application routes
app.use("/user", auth)
app.use("/page", page)
app.use("/event", event)

// default error handler
// function errorHandler(err, req, res, next){
//     if(res.headerSent){
//         return next(err)
//     }
//     res.status(500).json({error: err})
// }

app.listen(3001, ()=>{
    console.log(`app listening at port 3001`)
})