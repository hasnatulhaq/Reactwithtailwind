import Rightbarbtn from "../Rightbarbtn/Rightbarbtn";
import Rightbartab from "../Rightbartab/Rightbartab";
import {
  FaFileAlt,
  FaUndo,
  FaDownload,
  FaLink,
  FaBookmark,
  FaCross,
  FaTimes,
} from "react-icons/fa";
import { ReactComponent as BookmarkIcon } from "../../images/bookmark.svg";
import { ReactComponent as Newtab } from "../../images/Newtab-s.svg";
import { ReactComponent as Bugreport } from "../../images/bug-report.svg";
import { ReactComponent as Cross } from "../../images/cross.svg";

function RightSidebar() {
  const style = { color: "lightgray", fontSize: "2em" };
  const btnstyle = { fontSize: "1.0rem" };

  return (
    <div className=" bg-white w-[35rem] h-full z-auto absolute right-0 bottom-0 lg:block md:hidden sm:hidden">
      <div className="flex flex-row border-b-[1px] border-zlightgray justify-between items-center px-5 pr-5 h-9">
        <span className="text-purple">
          <Newtab className="fill-purple h-3.5 w-3.5" />
        </span>
        <div className="flex flex-row">
          <Bugreport className="h-5 w-5" />
          <span className="text-gray font-light text-base">
            <Cross className="h-5 w-5" />
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
        <Rightbartab text={"Zone Data"} />
        <Rightbartab text={"Permitted use"} />
        <Rightbartab text={"Controls"} />
        <Rightbartab text={"Overlays"} />
      </div>
      <div className="h-[500px] overflow-auto p-5">
        <ul className="leading-10 uppercase font-medium text-xs">
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
        />
        <Rightbarbtn text={"Order Report"} icon={<FaUndo style={btnstyle} />} />
        <Rightbarbtn
          text={"CSV Download"}
          icon={<FaDownload style={btnstyle} />}
        />
      </div>
    </div>
  );
}

export default RightSidebar;
