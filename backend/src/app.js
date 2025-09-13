const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const userRoutes = require('./routes/user.routes')
const historyRoutes = require('./routes/history.routes')
const cors = require('cors')
const  connectDb  = require('./config/mongoDB')
const connectCloudinary = require('./config/cloudinary')


const app = express()
 connectDb()
connectCloudinary()
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.send('api started')
})


app.use('/ai',aiRoutes)
app.use('/users',userRoutes)
app.use('/history',historyRoutes)
module.exports = app;


