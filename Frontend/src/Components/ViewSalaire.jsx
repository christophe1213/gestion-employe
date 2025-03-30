export default function ViewSalaire({min=0,max=0,sum=0}){
    return(<div className="row">
   
        <div class="col-md-4 mb-4">
       <div class="card  text-center text-dark h-100" style={{width:'400px'}}>
         <div class="card-body  shadow py-5">
           <h3 className='m'> Salaire Total:</h3>
           <h4 className='m'>{sum} AR</h4>
         </div>
         
       </div>
     </div>
     <div class="col-md-4 mb-4">
       <div class="card  text-center text-dark h-100" style={{width:'400px'}}>
         <div class="card-body  shadow py-5">
           <h3 className='m'> Salaire minimal:</h3>
           <h4 className='m'>{min} Ar</h4>
         </div>
         
       </div>
     </div>
     <div class="col-md-4 mb-4">
       <div class="card  text-center text-dark h-100" style={{width:'400px'}}>
         <div class="card-body  shadow py-5">
           <h3 className='m'> Salaire maximal:</h3>
           <h4 className='m'>{max} AR</h4>
         </div>
         
       </div>
     </div>
     
       </div>)
}