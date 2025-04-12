const express =require('express')
const {getAllEmploye,getminMax,getByIdEmploye,insertEmploye,updateEmploye,deleteEmploye}=require('../Controllers/EmployeController')

const StatistiqueRouter=express.Router()

StatistiqueRouter.get('/',getminMax)

module.exports=StatistiqueRouter