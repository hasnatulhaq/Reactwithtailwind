import { Autocomplete } from "@react-google-maps/api";



function Autosearch({onPlaceChanged , setAutocomplete}){
    return(
            <Autocomplete
            onLoad={(e)=>setAutocomplete(e)}
            onPlaceChanged={onPlaceChanged}
              restrictions={{ country: "us" }}
              className="bg-purple"
            >
              <input
                id="place-id"
                type="text"
                placeholder="Search for zoning data"
                className="focus:outline-none w"
              />
            </Autocomplete>
    )
}

export default Autosearch