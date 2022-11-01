import {ReactComponent as Search} from "../../../images/search.svg"


function Dropdownsearch({placeholder}){
    return(
         <div className="w-full p-2 h-13">
                <div className="flex flex-row border-[1px] h-8 border-zlightgray w-full items-center rounded p-1">
                <Search className="h-6 w-8"/>
                <input type="text" placeholder={placeholder} className="h-full w-5/6 text-xs p-2 focus:outline-none text-zdropsearch" />
                </div>
            </div>
    )
}
export default Dropdownsearch