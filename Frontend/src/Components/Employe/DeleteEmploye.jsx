import { useDispatchEmploye } from "../../Context/EmployeContext";
import { useEmployeStore } from "../../store/EmployeStore";
import { Modal,ModalHeader,ModalBody,ModalFooter } from "../Modals";
import { notif_succes,notify_echec } from "../Notification";
import { ToastContainer } from "react-toastify";
export function DeleteEmploye({id}){
    const dispatch=useDispatchEmploye()
    const {deleteEmploye}=useEmployeStore()
    const delete_t =async()=>{
        const r= await deleteEmploye(id)
        console.log(r)
        if(r=="SUCCESS"){
            dispatch({type:'delete',numEmp:id})
            notif_succes("suppréssion réussi")
        }else{
            notify_echec("echec de suppréssion")
        }
    }
    return (
        <Modal id={"delete"}>
            <ModalHeader>
                Supprimer
            </ModalHeader>
            <ModalBody>
                <p>Vous voulez supprimer cette employée {id}</p>
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-success" 
                                data-bs-dismiss="modal"
                            onClick={delete_t}
                            >Oui</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Non</button>
            </ModalFooter>
            {/* <ToastContainer/> */}
        </Modal>
    )
}