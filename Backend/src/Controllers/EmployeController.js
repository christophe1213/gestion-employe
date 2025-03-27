const EmployeController = ()=>{
    const getAllEmploye=(req,res)=>{
        res.send('Get Employe')
    }
    const getByIdEmploye=(req,res)=>{
        const {id}=req.params
        res.send(`${id} Employe`)
    }
    const insertEmploye=(req,res)=>{
        res.send("insert")
    }
    const updateEmploye=(req,res)=>{
        res.send("update ")
    }
    const deleteEmploye =(req,res)=>{
        res.send("delete")
    }
    return {
        getAllEmploye,
        getByIdEmploye,
        insertEmploye,
        updateEmploye,
        deleteEmploye
    }
}
module.exports=EmployeController()