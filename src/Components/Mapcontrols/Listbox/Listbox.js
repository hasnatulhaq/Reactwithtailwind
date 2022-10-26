

function Listbox(){
    return(
          <div className="flex flex-col text-white">
                <h1>Base map</h1>
                <label className="flex gap-3">
                <input type="radio" value="Base map"/>Base Map
                </label>
                <label className="flex gap-3">
                <input type="radio" value="satellite"/>satellite
                </label>
          </div>
    )
}

export default Listbox
