import "./App.css";
import "../src/global.css";
// import { FaFilter, FaBookmark, FaMapPin } from "react-icons/fa";
import MapsGoogle from "./Components/Googlemap/MapsGoogle";
import Navbar from "./Components/Navbar/Navbar";
import RightSidebar from "./Components/RightSidebar/Rightsidebar";
import { ReactComponent as Layer } from "./images/o-layer.svg";
import { ReactComponent as Opacity } from "./images/o-brightness.svg";
import { ReactComponent as Screenshot } from "./images/o-screenshot.svg";
import { ReactComponent as Print } from "./images/o-print.svg";
import { ReactComponent as Zoingboard } from "./images/o-zoingboard.svg";
import Legend from "./Components/Legend/Legend";
import Mapbar from "./Components/Mapbar/Mapbar";

function App() {
  return (
    <>
      <Navbar />
      {/* search menu  */}
      <Mapbar/>
      {/* <div className="w-11/12 lg:h-full bg-white p-3 flex gap-5 lg:flex-row md:flex-col sm:flex-col sm:h-24">
        <div className="border-[1px] border-zlightgray lg:w-2/6 h-11 ml-5 rounded-lg p-2 flex flex-row gap-3 shadow-sm px-6 md:w-full">
          <button className="px-2">
            <Bookmark className="fill-zlightgray h-6 w-6 mx-auto my-auto" />
          </button>
          <span className="border-l-[1px] border-zlightgray"></span>
          <div className="self-center">
            <Autocomplete
              // onLoad={(e)=>setAutocomplete(e)}
              //  onPlaceChanged={onPlaceChanged}
              restrictions={{ country: "us" }}
            >
              <input
                id="place-id"
                type="text"
                placeholder="Search for zoning data"
                className="focus:outline-none"
              />
            </Autocomplete>
          </div>
        </div>
        <div className="flex gap-4 lg:flex-row items-end">
          <Button
            text={"Zone Picker"}
            icon={<Filter className="w-3 h-2.5 fill-gray" />}
          />
          <Button
            text={"Plu Filter"}
            icon={<Filter className="w-3 h-2.5 fill-gray" />}
          />
          <Button
            text={"Prospect"}
            icon={<Filter className="w-3 h-2.5 fill-gray" />}
          />
          <Button
            text={"Zone Cases"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
          <Button
            text={"Listings"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
        </div>
      </div> */}
      <div className="items-center w-full relative">
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
        </div>
        <MapsGoogle />
        <Legend />
        <RightSidebar />
      </div>
    </>
  );
}

export default App;

