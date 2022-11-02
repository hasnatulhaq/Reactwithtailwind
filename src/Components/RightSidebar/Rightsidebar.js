import Rightbarbtn from "../Rightbarbtn/Rightbarbtn";
import Rightbartab from "../Rightbartab/Rightbartab";
import {
  FaFileAlt,
  FaUndo,
  FaDownload,
} from "react-icons/fa";
import { ReactComponent as BookmarkIcon } from "../../images/bookmark.svg";
import { ReactComponent as Newtab } from "../../images/Newtab-s.svg";
import { ReactComponent as Bugreport } from "../../images/bug-report.svg";
import { ReactComponent as Cross } from "../../images/cross.svg";
import { useState } from "react";

function RightSidebar() {
  
  const btnstyle = { fontSize: "1.0rem" };
  const [index , setIndex] = useState(0);
  return (
    <div className=" bg-white w-[35rem] h-[93%] z-auto absolute right-0 bottom-0 lg:block md:hidden sm:hidden">
      <div className="flex flex-row border-b-[1px] border-zlightgray justify-between items-center px-5 pr-5 h-9">
        <span className="text-purple">
          <Newtab className="fill-purple h-3.5 w-3.5" />
        </span>
        <div className="flex flex-row">
          <Bugreport className="h-5 w-5" />
          <span className="text-gray font-light text-base">
            <Cross className="h-5 w-5 fill-crosscolor hover:fill-zblue" onClick={()=>{console.log("click on cross sidebar")}} />
          </span>
        </div>
      </div>
      <div className="flex justify-between border-b-[1px] border-zlightgray px-5 pr-5">
        <h1 className="text-xl text-zblue h-20 p-2 font-medium">
          Los Angeles,CA,USA
        </h1>
        <span className="mt-5 mr-5">
          <BookmarkIcon className="w-10 h-10 fill-zlightgray" />
        </span>
      </div>
      <div className="flex w-full border-b-[1px] border-zlightgray p-4">
        <Rightbartab text={"Zone Data"}  
          onClick={() => {
            setIndex(0);
          }}
          />
        <Rightbartab text={"Permitted use"}
        onClick={() => {
          setIndex(1);
        }} 
        />
        <Rightbartab text={"Controls"}
        onClick={() => {
          setIndex(2);
        }}/>
        <Rightbartab text={"Overlays"}
        onClick={() => {
          setIndex(3);
        }}/>
      </div>
      <div className="h-[600px] overflow-auto p-5">
        <ul className="leading-10 p-5 uppercase font-medium text-xs" hidden={index !== 0}>
          <li>Zone Code</li>
          <li className="text-gray">C35</li>
          <li>Zone name</li>
          <ul>
            <li className="text-gray">C4</li>
          </ul>
          <li>Zone type</li>
          <ul>
            <li className="text-gray">Comercial</li>
          </ul>
          <li>Zone Code</li>
          <li className="text-gray">C35</li>
          <li>Zone name</li>
          <ul>
            <li className="text-gray">C4</li>
          </ul>
          <li>Zone type</li>
          <ul>
            <li className="text-gray">Comercial</li>
          </ul>
        </ul>
        <ul className="leading-10 p-5 uppercase font-medium text-xs" hidden={index !== 1} >
          <li>Permitted use</li>
          <li className="text-gray">C35</li>
          <li>Zone name</li>
          <ul>
            <li className="text-gray">C4</li>
          </ul>
          <li>Zone type</li>
          <ul>
            <li className="text-gray">Comercial</li>
          </ul>
          <li>Zone Code</li>
          <li className="text-gray">C35</li>
          <li>Zone name</li>
          <ul>
            <li className="text-gray">C4</li>
          </ul>
          <li>Zone type</li>
          <ul>
            <li className="text-gray">Comercial</li>
          </ul>
        </ul>
        <ul className="leading-10 p-5 uppercase font-medium text-xs" hidden={index !== 2} >
          <li>Controls</li>
           <p className="font-normal normal-case">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
           <li></li>
        </ul>
        <ul className="leading-10 p-5 uppercase font-medium text-xs" hidden={index !== 3} >
          <li>overlays</li>
          <li className="text-gray">C35</li>
          <li>Zone name</li>
          <ul>
            <li className="text-gray">C4</li>
          </ul>
          <li>Zone type</li>
          <ul>
            <li className="text-gray">Comercial</li>
          </ul>
          <li>Zone Code</li>
          <li className="text-gray">C35</li>
          <li>Zone name</li>
          <ul>
            <li className="text-gray">C4</li>
          </ul>
          <li>Zone type</li>
          <ul>
            <li className="text-gray">Comercial</li>
          </ul>
        </ul>
      </div>
      <div className="flex p-4 gap-1 bottom-0 absolute w-full border-t-[1px] border-zlightgray bg-white">
        <Rightbarbtn
          text={"Get Report"}
          icon={<FaFileAlt style={btnstyle} />} 
          bgcolor={"bg-zlblue"}
        />
        <Rightbarbtn 
          text={"Order Report"} 
          icon={<FaUndo style={btnstyle} />} 
          bgcolor={"bg-zlblue"}
          />
        <Rightbarbtn
          text={"CSV Download"}
          icon={<FaDownload style={btnstyle} />}
          bgcolor={"bg-zlblue"}
        />
      </div>
    </div>
  );
}

export default RightSidebar;
