
export default function Input(value,onChange){
    return(
        
        <div className="formular">
        <input type="text" className="search-bar" placeholder="Search for a city... " value={value} />
        <button type="button" className="btn" >submit</button>
        </div>

    )
}