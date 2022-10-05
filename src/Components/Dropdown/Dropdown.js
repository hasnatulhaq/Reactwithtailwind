import { ReactComponent as Cross } from "../../images/cross.svg";


function Dropdown(){

    return(
           <div id="dropdown" className="bg-white border-[1px] w-96 h-96 absolute z-30 mt-3 rounded-lg border-zlightgray p-3">
            <div className="h-full w-full relative">
            <div className="w-3 h-3 border-t-[1px] border-l-[1px] bg-white rotate-45 border-zlightgray relative top-[-19px] ml-24"></div>
            <div className="w-full pt-0 flex flex-row justify-between text-lg">
                <h1>Zone Filter</h1>
                <Cross className="h-5 w-5"/>
            </div>
            <div className="w-full p-2 h-13">
                <div className="flex flex-row border-[1px] h-8 border-zlightgray w-full items-center rounded p-1">
                <span className="w-1/6">search</span>
                <input type="text" placeholder="Search for zone cases..." className="h-full w-5/6 text-sm p-2" />
                </div>
            </div>
            <div className="w-full p-2">
                <div className="border-dotted border-[2px] border-zlightgray max-h-max max-w-max text-xm">hello world</div>
            </div>
            <div className="w-full h-44 flex flex-col p-2">
                Zone cases
                <div className="h-4/5 border-t-[1px] border-b-[1px] p-3 border-zlightgray overflow-auto">
                    <ul className="flex gap-5 flex-col">
                        <li className="flex gap-2 items-center"><input type="checkbox" className="w-4 h-4 border-[1px] border-zlblue"/>ARTS-1</li>
                        <li className="flex gap-2 items-center"><input type="checkbox"/>ARTS-1</li>
                        <li className="flex gap-2 items-center"><input type="checkbox"/>ARTS-1</li>
                        <li className="flex gap-2 items-center"><input type="checkbox"/>ARTS-1</li>
                        <li className="flex gap-2 items-center"><input type="checkbox"/>ARTS-1</li>
                        <li className="flex gap-2 items-center"><input type="checkbox"/>ARTS-1</li>
                    </ul>
                </div>
            </div>
            <div className="bottom-3 flex absolute w-full h-10 font-medium">
                <button className="h-full w-1/2 bg-zbrown rounded-lg text-white">Filter</button>
                <button className="h-full w-1/2 bg-white text-zblue text-left pl-3">Clear Filter</button>
            </div>
            </div>
       </div>
    )
}




export default Dropdown