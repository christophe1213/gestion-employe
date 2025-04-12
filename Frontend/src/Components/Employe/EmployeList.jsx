import { useEffect, useState } from "react"
import AddEmploye from "./AddEmploye"
import UpdateEmploye from "./UpdateEmploye"
import { DeleteEmploye } from "./DeleteEmploye"
import { ToastContainer } from "react-toastify"
import { useFormatNumber } from "../../Hook/useFormatNumber"
export default function EmployeList({data=[]}){
    const [loading,setLoading]=useState(true)
    const [id,setId]=useState('Ex')
    const [empl,setE]=useState({})
    const [idUp,setidUp]=useState('Ex')
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setLoading(false)

        },2000)
        return ()=>{
            clearInterval(timeout)
        }    
    },[id])

    const Ops =({salaire=0})=>{
        let c='';
        let op=''
        if(salaire<1000){
            c='badge bg-danger text-write'
            op='mediocre'
        }else if(salaire>=1000&&salaire<=5000){
            c='badge bg-info text-write'
            op='moyen'
        }else{
            c='badge bg-success text-write'
            op='grand'
        }
        return( <span className={c}>
                {op}
        </span>)
    }
    return (
      
        /*<div class="row">
            
            <div class="col-md-12 mb-3">
                <div class="card">
                    <div class="card-header">
                        <span><i class="bi bi-table me-2"></i></span> List de employées
                    </div>
                <div class="card-body" style={{height:'60vh'}}>
                    <div class="table-responsive">
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
                    <table
                        id="example"
                        class="table table-striped data-table"
       
                    >
                    <thead>
                        <tr>
                            <th>Numéro Employé</th>
                            <th>nom</th>
                            <th>Salaire</th>
                            <th>obs</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length!=0&&!loading&&data.map((d=>(
                            <tr key={d.numEmp}>
                                <td>{d.numEmp}</td>
                                <td>{d.nom}</td>
                                <td>Ar {useFormatNumber(d.salaire)}</td>
                                <td><Ops salaire={d.salaire}></Ops></td>
                                <td>
                                    <button className='btn btn-success'
                                      data-bs-toggle="modal"
                                      data-bs-target="#update"
                                      onClick={()=>setId(d.numEmp)}
                                    >
                                        <span className="m-2">
                                        <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>    
                                        </span>    
                                    
                                    </button>
                                    <button className='btn btn-danger'
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete"
                                        onClick={()=>setId(d.numEmp)}
                                    >
                                        <span className="m-1">
                                                        <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                                            <path fill="white" d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                                        </svg>
                                                    </span>
                                            
                                    </button>
                                </td>
                            </tr>
                        )))}
                       
                     
                    </tbody>
                    {loading&&<p> <span className="spinner-border text-primary"></span>Chargement...</p>}
         
          </table>
        </div>
      </div>
    </div>
  </div>
  <AddEmploye></AddEmploye>
  <UpdateEmploye id={id} />
  <DeleteEmploye id={id}/>
  <ToastContainer/> 
</div>*/
<div class="col-md-8">
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>NumEmp</th>
        <th>Nom</th>
        <th>Salaire (Ar)</th>
        <th>OPS</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="employeeTableBody">
    {data.length!=0&&!loading&&data.map((d=>(
                            <tr key={d.numEmp}>
                                <td>{d.numEmp}</td>
                                <td>{d.nom}</td>
                                <td>Ar {useFormatNumber(d.salaire)}</td>
                                <td><Ops salaire={d.salaire}></Ops></td>
                                <td>
                                    <button className='btn btn-success'
                                      data-bs-toggle="modal"
                                      data-bs-target="#update"
                                      onClick={()=>setId(d.numEmp)}
                                    >
                                        <span className="m-2">
                                        <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>    
                                        </span>    
                                        
                                    </button>
                                    <button className='btn btn-danger'
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete"
                                        onClick={()=>setId(d.numEmp)}
                                    >
                                        <span className="m-1">
                                                        <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                                            <path fill="white" d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                                        </svg>
                                                    </span>
                                            
                                    </button>
                                </td>
                            </tr>
                        )))}
                       
                     
    </tbody>
    {loading&&<p> <span className="spinner-border text-primary"></span>Chargement...</p>}
  </table>
  <UpdateEmploye id={id} />
  <DeleteEmploye id={id}/>
  <ToastContainer/>
</div>
</div>
    )
}