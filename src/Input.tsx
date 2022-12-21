

export default function Input({value,onChange,onClick}){
    return(
        
        <div className="formular">
        <input type="text" className="search-bar" placeholder="Search for a city... " value={value}   onChange={e => onChange(e.target.value)} />
        <button onClick={onClick} type="button" className="btn" >submit</button>
        </div>

    )
}