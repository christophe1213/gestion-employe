const express =require('express')
const {getAllEmploye,getminMax,getByIdEmploye,insertEmploye,updateEmploye,deleteEmploye}=require('../Controllers/EmployeController')

const EmployeRouter=express.Router()

EmployeRouter.get('/',getAllEmploye)
EmployeRouter.get('/:id',getByIdEmploye)
EmployeRouter.get('/details',getminMax)
EmployeRouter.post('/',insertEmploye)
EmployeRouter.put('/',updateEmploye)
EmployeRouter.delete('/:id',deleteEmploye)

module.exports=EmployeRouter