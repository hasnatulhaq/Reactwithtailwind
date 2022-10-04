import { ReactComponent as Cross } from "../../images/cross.svg";


function Dropdown(){

    return(
        <>
           <div id="dropdown" className="bg-white border-[1px] w-96 h-96 absolute z-30 mt-3 rounded-md border-zlightgray p-3">
            <div className="h-full w-full">
            <div className="w-3 h-3 border-t-[1px] border-l-[1px] bg-white rotate-45 border-zlightgray relative top-[-19px] ml-24"></div>
            <div className="w-full pt-0 flex flex-row justify-between text-lg">
                <h1>Zone Filter</h1>
                <Cross className="h-5 w-5"/>
            </div>
            <div className="w-full p-2 h-13">
                <input type="text" placeholder="Search for zone cases..." className="border-[1px] border-zlightgray w-full h-8 text-sm rounded p-2" />
            </div>
            <div className="w-full  p-2">
                <div className="border-dotted border-[2px] border-zlightgray max-h-max max-w-max text-xm">hello world</div>
            </div>
            <div className="w-full h-2/5 flex flex-col p-2">
                Zone cases
                <span className="w-full h-1 border-[1px] border-zlightgray"></span>
                <div className="h-4/5">
                    <ul>
                        <li>check box</li>
                        <li>check box</li>
                        <li>check box</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white bottom-0 flex relative">
                <button className="h-full bg-zbrown">filter</button>
                <button>clear filter</button>
            </div>
            </div>
       </div>
        </>
    )
}




export default Dropdown