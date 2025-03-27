import { act, createContext, useReducer } from "react";

const EmployeContext=createContext()
const DispatchEmployeContext=createContext()

export const EmployeProvider=({children})=>{
    const [employes,dispatch]=useReducer(
        reducer,
        initial
    )
    return (
        <EmployeContext.Provider value={employes}>
            <DispatchEmployeContext.Provider value={dispatch}>
                {children}
            </DispatchEmployeContext.Provider>
        </EmployeContext.Provider>
        
    )
}
const initial=[]
function reducer(employes,action){
    switch(action.type){
        case 'set':
            return action.employes
        case 'add':
            return [...employes,action.employe]
        case 'update':
            return employes.map(e=>{
                if(e.numEmp==action.employe.numEmp)return action.employe
                else return e
            })
        case 'delete':
            return employes.filter(e=>e.numEmp!=action.numEmp)
        default: {
            throw Error('Unknown action: ' + action.type);
        }
        }
       

}