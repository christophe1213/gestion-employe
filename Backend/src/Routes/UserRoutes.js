const express = require("express");
// const { route } = require("express/lib/application");

const UserRouter=express.Router()
let users=[
    {
        id:'1',
        name:'Rabe',
        firstName:'Koto',

    },
    {
        id:'2',
        name:'Rabe',
        firstName:'Rasoa',
        
    },
    {
        id:'3',
        name:'Rabe',
        firstName:'Ralambo',
        
    },
]
UserRouter.get('/',(req,res)=>{
    res.send(users)
})

UserRouter.get('/:id',(req,res)=>{
    const {id}=req.params
    
    const user = users.find(user =>user.id==id)

    res.send(user)
})
UserRouter.post('/',(req,res)=>{
    const user = req.body
    users.push(user)
    res.send(users)   
})
UserRouter.put('/',(req,res)=>{
    const user = req.body
    // const userR = users.find(user =>user.id==req.body.id)
    users = users.map(u=>{
        return u.id==user.id?user:u
    }
)
    res.send(users) 
})

UserRouter.delete('/:id',(req,res)=>{
    const {id}=req.params
    users=users.filter(u=>u.id!=id)
    res.send(users)
})
module.exports =UserRouter
