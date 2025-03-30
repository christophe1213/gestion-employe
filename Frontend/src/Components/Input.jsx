export function Input({type,title,placeholder,value,onChange,style}){
    
    return <div style={style}>
                <div className="mb-3 mt-3">
                        <label className="form-label">{title}</label>
                        <input type={type} value={value} className="form-control" 
                        placeholder={placeholder} 
                        onChange={onChange}
                        required/>
                </div>
    </div>
}