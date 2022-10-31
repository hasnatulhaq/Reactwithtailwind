import { ReactComponent as Cross } from "../../images/cross.svg";

function Dropdown(props){
         
      const data = -1;
        
    return(
         <div id="dropdown" className="bg-white border-[1px] w-96 h-[400px] absolute z-30 mt-3 rounded-lg border-zlightgray p-3 grow" hidden={props?.hidden}>
            <div className="h-full w-full relative">
            <div className="w-3 h-3 border-t-[2px] border-l-[2px] bg-white rotate-45 border-zlightgray relative top-[-19px] ml-[100px]"></div>
            <div className="w-full pt-0 flex flex-row justify-between items-center text-lg">
                <div className="flex flex-row  items-center">
                <h1 className="uppercase text-zdrophed text-base font-semibold">{props.title}</h1>
                <span>{props?.icon}</span>
                </div>
                <span className="cursor-pointer" onClick={()=>{props.datafromchild(data)}}>
                <Cross className="h-5 w-5 fill-crosscolor hover:fill-zblue"/>
                </span>
            </div>
            {props.filtersearch}
            {props.dotteddiv}
            <div className="w-full h-52 flex flex-col p-3 text-base font-semibold text-zzonecase uppercase">
                {props.filterzone}
                {props.zonecases}
                {props.parcelsize}
            </div>
            <div className="bottom-3 flex absolute w-full h-10 font-medium">
                <button className="h-full w-1/2 bg-zbrown rounded-lg text-white">{props.btntextl}</button>
                <button className="h-full w-1/2 bg-white text-zblue text-left pl-3">{props.btntextr}</button>
            </div>
            </div>
       </div>
    )
}
export default Dropdown

