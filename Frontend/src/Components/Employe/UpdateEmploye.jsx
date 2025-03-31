import { useEffect, useState } from "react";
import { Modal ,ModalHeader,ModalBody} from "../Modals";
import { Input } from "../Input";
import { ToastContainer } from "react-toastify";
import { useDispatchEmploye } from "../../Context/EmployeContext";
import { useEmployeStore } from "../../store/EmployeStore";
import { notif_succes,notify_echec } from "../Notification";
export default function UpdateEmploye({id}){
    
    const [employe,setEmploye]=useState({
        numEmp:'er',
        nom:'p',
        salaire:''
    })

    const {updateEmploye,selectById}=useEmployeStore()
    const fetch=async()=>{
        const r = await selectById(id)
        console.log('dfdf')
        if(r!=null)setEmploye(r)
    }
    const dispatch=useDispatchEmploye()
    
    const submit=async(e)=>{
        e.preventDefault()
        const r = await updateEmploye(employe)
        console.log(r)
        if(r=='SUCCESS'){
            dispatch({type:'update',employe:employe})
            notif_succes("modification employée réussi")
        }else{
            notify_echec("Erreur de mofication employé")
        }

       
    }
    useEffect(()=>{
        fetch()
    },[id])
    return (
        <Modal id="update">
            <ModalHeader>
               Modifier un employé {id} 
            </ModalHeader>
            <ModalBody>
                <form onSubmit={submit}>
                    
                     <Input type={"text"}
                        title={"Nom"}
                        value={employe.nom}
                        onChange={(e)=>setEmploye({...employe,nom:e.target.value})}

                    />
                     <Input type={"number"}
                        title={"salaire en Ar"}
                        value={employe.salaire}
                        onChange={(e)=>setEmploye({...employe,salaire:e.target.value})}

                    />
                    <button type="submit" className="btn btn-primary"
                    data-bs-dismiss="modal"
                    >Modifier</button>
                    
                </form>
             
            </ModalBody>
          
        </Modal>
    )
}