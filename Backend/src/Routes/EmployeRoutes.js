const express =require('express')
const {getAllEmploye,getByIdEmploye,insertEmploye,updateEmploye,deleteEmploye}=require('../Controllers/EmployeController')

const EmployeRouter=express.Router()

EmployeRouter.get('/',getAllEmploye)
EmployeRouter.get('/:id',getByIdEmploye)
EmployeRouter.post('/',insertEmploye)
EmployeRouter.put('/',updateEmploye)
EmployeRouter.delete('/',deleteEmploye)

module.exports=EmployeRouter