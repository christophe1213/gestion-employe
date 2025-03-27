const express = require("express");

const {getAll,getById,creatTask,updateTask,deleteTask}=require('./../Controllers/TasksController')

const TasksRouter=express.Router()

TasksRouter.get('/',getAll)

TasksRouter.get('/:id',getById)

TasksRouter.post('/',creatTask)

TasksRouter.put('/',updateTask)

TasksRouter.delete('/:id',deleteTask)

module.exports =TasksRouter
