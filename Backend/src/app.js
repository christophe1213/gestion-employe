const express = require('express')
const cors =require('cors')
const app = express()


const UserRouter = require("./Routes/UserRoutes.js")
const TasksRouter=require('./Routes/TasksRoutes.js')
const EmployeRouter=require('./Routes/EmployeRoutes.js')
app.use(cors())

app.use(express.json())
app.use('/users',UserRouter)
app.use('/tasks',TasksRouter)
app.use('/employe',EmployeRouter)
app.get('/',(req,res)=>{
    res.send("Hello Worldd")

})
module.exports=app