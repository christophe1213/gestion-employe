import { useEffect } from "react"
import { useEmployeStore } from "../store/EmployeStore"
import ViewSalaire from "./ViewSalaire"
import { useDispatchEmploye, useEmploye } from "../Context/EmployeContext"
import PieChartComponent from "./Graphe"
import EmployeList from "./Employe/EmployeList"
import AddEmploye from "./Employe/AddEmploye"
import SalairePieChart from "./SalaireGraphe"
export default function Dashboard(){
    const {selectEmploye,minMaxSum}=useEmployeStore()
    const dispatch =useDispatchEmploye()    
    const employes=useEmploye()
    const [min,max,sum]=minMaxSum(employes)
    
    const fetchData=async()=>{
        const r = await selectEmploye()
        if(r!=null)dispatch({
            type:'set',
            employes:r
        })
        console.log(r)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
  
        <div>
            <div class="container my-5">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2>Tableau de Bord - Employés</h2>
                  
                    <button type="btn" 
                                className="btn btn-primary" 
                                data-bs-toggle="modal"
                                data-bs-target="#add">
                                    <span className="m-1">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="white" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm4 11h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"/>
                                    </svg>
                                    </span>
                                    ajouter

                                
                        </button> 
            </div>

    <div class="row">
      
      
<AddEmploye></AddEmploye>
<EmployeList data={employes}/> 
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Graphique des Salaires (Ar)</h5>
           
            <SalairePieChart sum={sum} min={min} max={max}></SalairePieChart>
          </div>
        </div>
      </div>
    </div>

   

    <ViewSalaire min={min} max={max} sum={sum}/>
  </div>

        </div>
)

}