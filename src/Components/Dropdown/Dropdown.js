import { ReactComponent as Cross } from "../../images/cross.svg";
import {ReactComponent as Search} from "../../images/search.svg"

function Dropdown({title,btntextl,btntextr,hidden}){
      

    const zonelist = [
        { zonecode: "arts-1"},
        { zonecode: "arts-2"},
        { zonecode: "arts-3"},
        { zonecode: "arts-4"},
        { zonecode: "arts-5"},
        { zonecode: "arts-6"},
        { zonecode: "arts-7"},
        { zonecode: "arts-8"},
        { zonecode: "arts-9"},
        { zonecode: "arts-10"},
        { zonecode: "arts-11"},
        { zonecode: "arts-12"},
        { zonecode: "arts-13"},
        { zonecode: "arts-14"},
      ];
       
    return(
        <>
         <div id="dropdown" className="bg-white border-[1px] w-96 h-[400px] absolute z-30 mt-3 rounded-lg border-zlightgray p-3" hidden={hidden}>
            <div className="h-full w-full relative">
            <div className="w-3 h-3 border-t-[1px] border-l-[1px] bg-white rotate-45 border-zlightgray relative top-[-19px] ml-[100px]"></div>
            <div className="w-full pt-0 flex flex-row justify-between text-lg">
                <h1 className="uppercase text-zdrophed text-base font-semibold">{title}</h1>
                <Cross className="h-5 w-5"/>
            </div>
            <div className="w-full p-2 h-13">
                <div className="flex flex-row border-[1px] h-8 border-zlightgray w-full items-center rounded p-1">
                <Search className="h-6 w-8"/>
                <input type="text" placeholder="Search for zone cases..." className="h-full w-5/6 text-xs p-2 focus:outline-none text-zdropsearch" />
                </div>
            </div>
            <div className="w-full p-2 flex flex-row">
                <div className="border-dashed border-[1px] border-zlightgray w-16 h-7 text-xm rounded"></div>
            </div>
            <div className="w-full h-48 flex flex-col p-3 lowercase text-base font-semibold text-zzonecase">
                Zone cases
                <div>  
                </div>
                <div className="h-4/5 border-t-[1px] border-b-[1px] p-5 border-zlightgray overflow-auto">
                    <ul className="flex gap-7 flex-col">
                    {zonelist.map((data)=>(
                        <li className="flex gap-2 items-center uppercase text-xs text-zzonecase font-semibold"><input type="checkbox" className="w-4 h-4 border-[3px] border-zblue"/>{data.zonecode}</li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="bottom-3 flex absolute w-full h-10 font-medium">
                <button className="h-full w-1/2 bg-zbrown rounded-lg text-white">{btntextl}</button>
                <button className="h-full w-1/2 bg-white text-zblue text-left pl-3">{btntextr}</button>
            </div>
            </div>
       </div>
       <div id="dropdown" className="bg-white border-[1px] w-96 h-[400px] absolute z-30 mt-3 rounded-lg border-zlightgray p-3" hidden={hidden}>
       <div className="h-full w-full relative">
       <div className="w-3 h-3 border-t-[1px] border-l-[1px] bg-white rotate-45 border-zlightgray relative top-[-19px] ml-[100px]"></div>
       <div className="w-full pt-0 flex flex-row justify-between text-lg">
           <h1 className="uppercase text-zdrophed text-base font-semibold">{title}</h1>
           <Cross className="h-5 w-5"/>
       </div>
       <div className="w-full p-2 h-13">
           <div className="flex flex-row border-[1px] h-8 border-zlightgray w-full items-center rounded p-1">
           <Search className="h-6 w-8"/>
           <input type="text" placeholder="Search for zone cases..." className="h-full w-5/6 text-xs p-2 focus:outline-none text-zdropsearch" />
           </div>
       </div>
       <div className="w-full p-2 flex flex-row">
           <div className="border-dashed border-[1px] border-zlightgray w-16 h-7 text-xm rounded"></div>
       </div>
       <div className="w-full h-48 flex flex-col p-3 lowercase text-base font-semibold text-zzonecase">
           Zone cases
           <div>  
           </div>
           <div className="h-4/5 border-t-[1px] border-b-[1px] p-5 border-zlightgray overflow-auto">
               <ul className="flex gap-7 flex-col">
               {zonelist.map((data)=>(
                   <li className="flex gap-2 items-center uppercase text-xs text-zzonecase font-semibold"><input type="checkbox" className="w-4 h-4 border-[3px] border-zblue"/>{data.zonecode}</li>
               ))}
               </ul>
           </div>
       </div>
       <div className="bottom-3 flex absolute w-full h-10 font-medium">
           <button className="h-full w-1/2 bg-zbrown rounded-lg text-white">{btntextl}</button>
           <button className="h-full w-1/2 bg-white text-zblue text-left pl-3">{btntextr}</button>
       </div>
       </div>
  </div>
        </>
          
    )
}

export default Dropdown