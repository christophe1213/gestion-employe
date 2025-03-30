import { useEffect } from "react"
import { useEmployeStore } from "../store/EmployeStore"
import ViewSalaire from "./ViewSalaire"
import { useDispatchEmploye, useEmploye } from "../Context/EmployeContext"
import PieChartComponent from "./Graphe"
import EmployeList from "./Employe/EmployeList"
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
    return <div className="card">
        <div className="card">

            <div className="card-header">
                <div className="text-center mb3 h2">
                        Tableau de bord
                        </div>   
                    
            </div>
            <div className="card-body">
                <ViewSalaire min={min} max={max} sum={sum}/>
                <div className="row">
                    <div className="col-md-6 mb-3">
                       <div className="card h-100">
                            <div className="card-header">
                            <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                                Graphe 
                            </div>
                            <div className="card-body">
                                <PieChartComponent min={min} max={max} sum={sum}/>
                            </div>

                       </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <EmployeList data={employes}/>      
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
}