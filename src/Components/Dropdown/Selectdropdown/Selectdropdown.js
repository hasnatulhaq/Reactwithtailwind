import {ReactComponent as Search} from "../../../images/search.svg"


function Selectdropdown({title , placeholder }){
    return(
        <div className="flex flex-col w-full items-start gap-1">
                <div className="text-xs text-gray">{title}</div>
                <div className="w-full h-15">
                <div className="flex flex-row-reverse border-[1px] h-8 border-zlightgray w-full items-center rounded p-1">
                <Search className="h-6 w-8"/>
                <span className='border-l-[1px] h-4  border-zlightgray'></span> 
                <input type="text" placeholder={placeholder} className="h-full w-5/6 text-xs p-2 focus:outline-none text-zdropsearch" />
                </div>
            </div>
        </div>
    )
}

export default Selectdropdown


