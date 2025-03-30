import { useState } from "react";
import { Modal ,ModalHeader,ModalBody} from "../Modals";
import { Input } from "../Input";
import { ToastContainer } from "react-toastify";
import { useDispatchEmploye } from "../../Context/EmployeContext";
import { useEmployeStore } from "../../store/EmployeStore";
import { notif_succes,notify_echec } from "../Notification";
export default function AddEmploye(){
    const [employe,setEmploye]=useState({
        numEmp:'',
        nom:'',
        salaire:0
    })
    const {insertEmploye}=useEmployeStore()
    const dispatch=useDispatchEmploye()
    const submit=async(e)=>{
        e.preventDefault()
        const r = await insertEmploye(employe)
        console.log(r)
        if(r=='SUCCESS'){
            dispatch({type:'add',employe:employe})
            notif_succes("Ajout employée réussi")
            setEmploye({ numEmp:'',nom:'',salaire:0})

        }else{
            notify_echec("Erreur d'ajout employé")
        }

        
    }
    return (
        <Modal id="add">
            <ModalHeader>
                Ajouter un employé
            </ModalHeader>
            <ModalBody>
                <form onSubmit={submit}>
                    <Input type={"text"}
                        title={"Numéro employé"}
                        value={employe.numEmp}
                        onChange={(e)=>setEmploye({...employe,numEmp:e.target.value})}

                    />
                     <Input type={"text"}
                        title={"Nom"}
                        value={employe.nom}
                        onChange={(e)=>setEmploye({...employe,nom:e.target.value})}

                    />
                     <Input type={"number"}
                        title={"salaire"}
                        value={employe.salaire}
                        onChange={(e)=>setEmploye({...employe,salaire:e.target.value})}

                    />
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                    
                </form>
            
            </ModalBody>
          
        </Modal>
    )
}