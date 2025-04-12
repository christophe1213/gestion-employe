import axios from "axios"

const URL='http://localhost:3000/employe'
export const useEmployeStore=()=>{
    const selectEmploye=async()=>{
        try{
            const r = await  axios.get(URL)
            return r.data
        }catch(e){
        
        }
    }
    
    const selectById=async(id)=>{
 
            try{
                const r = await  axios.get(`${URL}/${id}`)
                return r.data
            }catch(e){
            
            }
        
    }
    const insertEmploye=async(employe)=>{
        try{
            const r = await  axios.post(URL,employe)
            return r.data
        }catch(e){
            console.log(e)
        }
    }
    const updateEmploye=async(employe)=>{
        try{
            const r = await  axios.put(URL,employe)
            return r.data
        }catch(e){
            console.log(e)
        }
    }
    const deleteEmploye=async(id)=>{
       try{
            const r= await axios.delete(`${URL}/${id}`)
            return r.data

       }catch(e){
            console.log(e)
       }
        
    }
    const minMaxSum=(employe=[])=>{
        let init=employe.length==0?0:employe[0].salaire
        let min =init
        let max =init
        let sum =0
        if(employe!=[]){
            for(let i=0; i<employe.length;i++){
                min=min>employe[i].salaire?employe[i].salaire:min
                max= max<employe[i].salaire?employe[i].salaire:max
                sum+=parseInt(employe[i].salaire)
            }
        }
        return [min,max,sum]
    }
    const statisque=async()=>{
        try{
            const r = await  axios.get('http://localhost:3000/statisque')
            return r.data
        }catch(e){
        
        }
    }
    return {
        selectEmploye,
        insertEmploye,
        minMaxSum,
        deleteEmploye,
        updateEmploye,
        selectById,
        statisque

    }
}