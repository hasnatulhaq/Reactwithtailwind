import "./App.css";
import "../src/global.css";
// import { FaFilter, FaBookmark, FaMapPin } from "react-icons/fa";
import MapsGoogle from "./Components/Googlemap/MapsGoogle";
import Navbar from "./Components/Navbar/Navbar";
import RightSidebar from "./Components/RightSidebar/Rightsidebar";
import Legend from "./Components/Legend/Legend";
import Mapcontrols from "./Components/Mapcontrols/Mapcontrols";

function App() {
  return (
    <>
      <Navbar/>
      <div className="w-full relative">
        <Mapcontrols/>
        <MapsGoogle />
        <Legend />
        <RightSidebar/>
      </div>
    </>
  );
}

export default App;

