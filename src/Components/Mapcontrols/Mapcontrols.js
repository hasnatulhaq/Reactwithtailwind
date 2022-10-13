import { ReactComponent as Layer } from "../../images/o-layer.svg";
import { ReactComponent as Opacity } from "../../images/o-brightness.svg";
import { ReactComponent as Screenshot } from "../../images/o-screenshot.svg";
import { ReactComponent as Print } from "../../images/o-print.svg";
import { ReactComponent as Zoingboard } from "../../images/o-zoingboard.svg";
import ControlsDropdown from "./ControlsDropdown/ControlsDropdown";
import { useState } from "react";
import Headingdiv from "./Headingdiv/Headingdiv";


function Mapcontrols(){

   const [index , setIndex] = useState()


    return(
         <div className="z-20 mx-6 my-1 w-1/5 absolute h-35 flex gap-10 p-2 bg-ztranparent">
          <div className="flex flex-col justify-center h-full w-10 items-center bg-zlightgray rounded">
            <div className=" bg-zmapmenu flex flex-col w-full h-full rounded justify-center items-center text-white">
              <span className="text-xl text-zstrip items-center">+</span>
              <span className="border-b-[1px] w-full border-zlightgray "></span>
              <span className="text-xl items-center">-</span>
            </div>
          </div>
          <div className="w-full flex flex-row gap-[1px] h-[35px] justify-center items-center bg-zlightgray rounded-md text-white">
            <div className="w-1/5 h-full rounded-l-md bg-zmapmenu flex justify-center items-center pt-[0.5rem] pb-[0.5rem]">
              <Layer className="fill-white" />
            </div>
            <div className="w-1/5 h-full bg-zmapmenu flex justify-center items-center pt-[0.5rem] pb-[0.5rem]">
              <Opacity className="fill-white" />
            </div>
            <div className="w-1/5 h-full bg-zmapmenu flex justify-center items-center pt-[0.5rem] pb-[0.5rem]">
              <Screenshot className="fill-white" />
            </div>
            <div className="w-1/5 h-full bg-zmapmenu flex justify-center items-center pt-[0.5rem] pb-[0.5rem]">
              <Print className="fill-white" />
            </div>
            <div className="w-1/5 h-full bg-zmapmenu rounded-r-md flex justify-center items-center pt-[0.5rem] pb-[0.5rem]">
              <Zoingboard className="fill-white stroke-1 stroke-gray" />
            </div>
          </div>
           <ControlsDropdown Headingdiv={<Headingdiv text="Print pdf"/>}/>
        </div>
    )
}

export default Mapcontrols