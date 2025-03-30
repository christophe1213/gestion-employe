export function ModalHeader({children}) {
    return <div>
                <div className="modal-header">
                    <h4 className="modal-title">{children}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

    </div>
}

export function ModalBody({children}){
    return <div>
                <div className="modal-body">
                        {children}                      
                </div>
    </div>
}
export function ModalFooter({children}){
    return <div>
                <div className="modal-footer">
                    {children}            
                </div>

    </div>
}
 export function Modal({id,children,ref})
{
    return <div>
         <div className="modal fade text-dark" id={id} ref={ref} tabIndex="-1">                  
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}  
                </div>
            </div>
        </div>
    </div>

}
