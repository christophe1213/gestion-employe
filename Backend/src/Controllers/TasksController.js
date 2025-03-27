const db=require('./../../databases')

const TasksController = ()=>{
    const getAll = (req,res)=>{
        const result = db.query('SELECT * FROM tasks',(err,row)=>{
            if(err)return err

            res.send(row)
        })
    }
    const getById =(req,res)=>{
        const {id}=req.params
        db.query('SELECT * FROM tasks WHERE id =?',[id],(err,row)=>{
            if(err)return err
            res.send(row[0])
        })   
    }
    const creatTask =(req,res)=>{
        const {task}=req.body
        db.query('INSERT tasks (task)VALUE(?)',[task],(err,row)=>{
            if(err){
                res.send("error")
                return err
            }
            res.send("success")
            
        })
    
    }
    const updateTask=(req,res)=>{
        const {id,task}=req.body
        db.query('UPDATE tasks set task=? WHERE id=?',[task,id],(err,row)=>{
            if(err){
                res.send("error")
                return err
            }
            res.send("success")
            
        })
    
   
    
    }
    const deleteTask=(req,res)=>{
        const {id}=req.params
        db.query('DELETE FROM tasks  WHERE id=?',[id],(err,row)=>{
            if(err){
                res.send("error delete")
                return err
            }
            res.send("success")
            
        })
    }
    return{
        getAll,
        getById,
        creatTask,
        updateTask,
        deleteTask,
    }

}
module.exports= TasksController()