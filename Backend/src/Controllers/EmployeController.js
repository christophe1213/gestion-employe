const db=require('./../../databases')

const EmployeController = ()=>{
    const getAllEmploye=(req,res)=>{
        db.query('SELECT * FROM employe',(err,row)=>{
            if(err)res.send(err.message)
            else res.send(row)
        })
    }
    const getByIdEmploye=(req,res)=>{
        const {id}=req.params
        db.query(`SELECT * FROM employe WHERE numEmp=?`,[id],(err,row)=>{
            if(err)res.send(err.message)
            else res.send(row[0])
        })
    }
    const insertEmploye=(req,res)=>{
        const {numEmp,nom,salaire}=req.body
        db.query("INSERT employe(numEmp,nom,salaire) VALUES(?,?,?)",
            [numEmp,nom,salaire],(err,row)=>{
                    if(err)res.send("Error requete insert "+err.message)
                    else res.send("SUCCESS")
                }
            
        )
       
    }
    const updateEmploye=(req,res)=>{
        const {numEmp,nom,salaire}=req.body
        db.query("UPDATE employe set nom=?,salaire=? WHERE numEmp=?",
            [nom,salaire,numEmp],(err,row)=>{
                    if(err)res.send("Error requete UPDATE "+err.message)
                    else res.send("SUCCESS")
                }
            
        )
    }
    const deleteEmploye =(req,res)=>{
        const {id}=req.params
        db.query(`DELETE FROM employe WHERE numEmp=?`,[id],(err,row)=>{
            if(err)res.send(err.message)
            else res.send("SUCCESS")
        })   
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