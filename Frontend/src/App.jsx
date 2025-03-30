import { useState } from 'react'
import 'bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './Components/NavBar'
import PieChartComponent from './Components/Graphe';
import Dashboard from './Components/DashBoard';
import { EmployeProvider } from './Context/EmployeContext';
function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <main className='mt-5 pt-3'>
        <div className='container-fluid'>
            <div className='row'>
                <div class="col-md-12">
                  <h4>Dashboard</h4>
              </div>
            </div>
          
          <Total/>
            <Test></Test> 
        </div>
      </main> */}
      <EmployeProvider>
            <Dashboard></Dashboard>
      </EmployeProvider>
     
      <footer class="bg-whitr text-dark text-center py-3">
        <p>&copy; 2025 </p>
    </footer>

    </>
  )
}

function Total(){
  return(
  <div className="row">
   
   <div class="col-md-4 mb-4">
  <div class="card bg-primary text-center text-dark h-100" style={{width:'400px'}}>
    <div class="card-body  shadow py-5">
      <h3 className='m'> Salaire Total:</h3>
      <h4 className='m'>150 000 AR</h4>
    </div>
    
  </div>
</div>
<div class="col-md-4 mb-4">
  <div class="card bg-warning text-center text-dark h-100" style={{width:'400px'}}>
    <div class="card-body  shadow py-5">
      <h3 className='m'> Salaire minimal:</h3>
      <h4 className='m'>150 000 AR</h4>
    </div>
    
  </div>
</div>
<div class="col-md-4 mb-4">
  <div class="card bg-success text-center text-dark h-100" style={{width:'400px'}}>
    <div class="card-body  shadow py-5">
      <h3 className='m'> Salaire maximal:</h3>
      <h4 className='m'>150 000 AR</h4>
    </div>
    
  </div>
</div>

  </div>)
}

function Test(){
  return <div class="row">
  <div class="col-md-6 mb-3">
    <div class="card h-100">
      <div class="card-header">
        <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
        Area Chart Example
      </div>
      <div class="card-body ">
        <PieChartComponent></PieChartComponent>
      </div>
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <Table></Table>
  </div>
</div>
}
function Table(){
  return   <div class="row">
  <div class="col-md-12 mb-3">
    <div class="card">
      <div class="card-header">
        <span><i class="bi bi-table me-2"></i></span> Data Table
      </div>
      <div class="card-body" style={{height:'60vh'}}>
        <div class="table-responsive">
          <table
            id="example"
            class="table table-striped data-table"
       
          >
            <thead>
              <tr>
                <th>Numéro Employé</th>
                <th>nom</th>
                <th>Salare</th>
                <th>obs</th>
                <th>action</th>
              </tr>
            </thead>
           <tbody>
                <tr>
                  <td>C1</td>
                  <td>Rakoto</td>
                  <td>150 000 Ar</td>
                  <td><span className='badge bg-success text-write'>Grand</span></td>
                  <td>
                    <button className='btn btn-success'>
                    <span className="m-2">
                                    <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>    
                                    </span>    
                                  
                    </button>
                    <button className='btn btn-danger'>
                    <span className="m-1">
                                        <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                            <path fill="white" d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                        </svg>
                                    </span>
                            
                    </button>
                  </td>      
                </tr>
                <tr>
                  <td>C1</td>
                  <td>Rakoto</td>
                  <td>150 000 Ar</td>
                  <td><span className='badge bg-success text-write'>Grand</span></td>
                  <td>
                    <button className='btn btn-success'>
                    <span className="m-2">
                                    <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>    
                                    </span>    
                                  
                    </button>
                    <button className='btn btn-danger'>
                    <span className="m-1">
                                        <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                            <path fill="white" d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                        </svg>
                                    </span>
                            
                    </button>
                  </td>      
                </tr>
                     
                <tr>
                  <td>C1</td>
                  <td>Rakoto</td>
                  <td>150 000 Ar</td>
                  <td><span className='badge bg-success text-write'>Grand</span></td>
                  <td>
                    <button className='btn btn-success'>
                    <span className="m-2">
                                    <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>    
                                    </span>    
                                  
                    </button>
                    <button className='btn btn-danger'>
                    <span className="m-1">
                                        <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                            <path fill="white" d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                        </svg>
                                    </span>
                            
                    </button>
                  </td>      
                </tr>
                <tr>
                  <td>C1</td>
                  <td>Rakoto</td>
                  <td>150 000 Ar</td>
                  <td><span className='badge bg-success text-write'>Grand</span></td>
                  <td>
                    <button className='btn btn-success'>
                    <span className="m-2">
                                    <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>    
                                    </span>    
                                  
                    </button>
                    <button className='btn btn-danger'>
                    <span className="m-1">
                                        <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                            <path fill="white" d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                        </svg>
                                    </span>
                            
                    </button>
                  </td>      
                </tr>
                     
           </tbody>
         
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
}
export default App
