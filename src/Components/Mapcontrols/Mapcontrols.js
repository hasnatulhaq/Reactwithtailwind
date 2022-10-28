import { ReactComponent as Layer } from "../../images/o-layer.svg";
import { ReactComponent as Opacity } from "../../images/o-brightness.svg";
import { ReactComponent as Screenshot } from "../../images/o-screenshot.svg";
import { ReactComponent as Print } from "../../images/o-print.svg";
import { ReactComponent as Zoingboard } from "../../images/o-zoingboard.svg";
import { useState } from "react";
import Iconbutton from "./Iconbutton/Iconbutton";
import ControlTray from "./ControlTray";

function Mapcontrols() {
  
  const [index, setIndex] = useState();

  const datafromchild =(data)=>{
    setIndex(data)
}
  
  return (
    <div className="z-20 mx-6 my-1 w-1/5 mt-[70px] absolute h-35 flex gap-10 p-2 bg-ztranparent">
      <div className="flex flex-col justify-center h-full w-10 items-center bg-zlightgray rounded">
        <div className=" bg-zmapmenu flex flex-col w-full h-full rounded justify-center items-center text-white">
          <span className="text-xl text-zstrip items-center">+</span>
          <span className="border-b-[1px] w-full border-zlightgray "></span>
          <span className="text-xl items-center">-</span>
        </div>
      </div>
      <div className="w-full flex flex-row gap-[1px] h-[35px] justify-center items-center bg-zlightgray rounded-md text-white">
        <Iconbutton
          icon={<Layer className="fill-white" />}
          onClick={() => {
            setIndex(0);
          }}
        />
        <Iconbutton
          icon={<Opacity className="fill-white" />}
          onClick={() => {
            setIndex(1);
          }}
        />
        <Iconbutton
          icon={<Screenshot className="fill-white" />}
          onClick={() => {
            setIndex(2);
          }}
        />
        <Iconbutton
          icon={<Print className="fill-white" />}
          onClick={() => {
            setIndex(3);
          }}
        />
        <Iconbutton
          icon={<Zoingboard className="fill-white stroke-1 stroke-gray" />}
        />
      </div>
      <ControlTray index={index} datafromchild={datafromchild}/>
    </div>
  );
}

export default Mapcontrols;
