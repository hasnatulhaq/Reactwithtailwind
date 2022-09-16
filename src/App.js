// import logo from './logo.svg';
import './App.css';
import '../src/global.css'
import Map from './Components/Map/Map';
import {FaFileAlt, FaUndo, FaDownload, FaFilter, FaLink, FaBookmark, FaMapPin, FaLocationArrow, FaFill, FaTruckPickup, FaPenNib } from 'react-icons/fa';
import logo  from './images/zoneomics_full.png'
import Colorpicker from './images/colorpicker-s.svg';

// import Button from './Components/Button/Button';
// import Map from './Components/Map/Map'

function App() {
  const filterstyle = { color : "lightgray"}
  const style = { color: "lightgray", fontSize: "1.5em" }
  const btnstyle ={ fontSize: "1.0rem"}
  const mappin={color : "gray" , fontSize : "1.0em"}
  return (
    <>
    {/* Top navbar */}
    <nav className=' bg-white bottom-2 border-b-[1px] h-20 text-center pt-6 p-5 border-lightgray flex flex-row'>
               <div className='flex w-full flex-row  ml-16 mr-16 '>
               <span></span>
               <img src={logo} alt="logo rezone" className="text-xl h-[40px] mb-5"/><sup className='text-purple border-[1px] text-sm p-1 h-7 rounded'>Pro</sup>
               {/* <span className='text-xl text-purple'>Zoneomics<sup className='text-purple border-[1px] text-sm'><small>PRO</small></sup></span> */}
               <div className='mt-3'>
               <ul className="bg-red flex space-x-14 text-gray gap-x-2 ml-14">
                   <li>Dashboard</li>
                   <li>Zoning Data</li>
                   <li>API Docs</li>
                   <li>All Cities</li>
               </ul>
               </div>
               </div>
               <div className='text-xl text-white flex items-end bg-zgray flex-end w-12 rounded-full mr-auto text-center'></div>    
      </nav>
      {/* search menu  */}
      <div className='w-full h-16 bg-white p-3 flex gap-10'>
           <div className='border-[1px] border-lightgray w-1/4 h-10 ml-16 rounded-lg p-2 flex flex-row gap-2'>
            <div>
            <FaBookmark style={style}/>
            </div>
            <span className='border-[1px] w-[1px] border-lightgray'></span>
            <div>
            <input type="text" placeholder="Search address"  className="focus:outline-none"></input>
            </div>
            {/* <span className='bg-purple'></span> */}
           </div>
           <div className='flex flex-row gap-10'>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between"><div>Zone Picker</div> <span className='border-[1px] h-5 w-[1px] border-lightgray'></span> <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between"><div>Plu Filter</div> <span className='border-[1px] h-5 w-[1px] border-lightgray'></span> <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between"><div>Propect</div> <span className='border-[1px] h-5 w-[1px] border-lightgray'></span> <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between"><div>Zone Cases</div> <span className='border-[1px] h-5 w-[1px] border-lightgray'></span><span className="mt-1"><FaMapPin style={mappin}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between"><div>Lisitings</div> <span className='border-[1px] h-5 w-[1px] border-lightgray'></span> <span className="mt-1"><FaMapPin style={mappin}/></span></div>
           </div>
      </div>
      <div className='flex bg-metal h-[30%]'>
      <div className='font-bold items-center w-full'>
         <Map/>
        <div className='bg-white w-40 border-[1px] z-[300] h-60 ml-16 mt-[500px] border-lightgray rounded-md text-center bottom-5 absolute overflow-auto'>
        {/* <Colorpicker fill="red"/> */}
           <div className='border-b-[1px] border-lightgray font-normal flex flex-row justify-between'>
              <div>Legend</div> 
               <img src={Colorpicker} alt="color picker" className='rounded border-[1px] border-zblue w-5'/>
           </div>
           <div className='text-left font-normal'>
               <ul>
                   <li><div className='w-4 rounded h-2 bg-purple'></div>code</li>
                   <li className='flex flex-row'><span className='bg-gray rounded'></span><span>code</span></li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
               </ul>
           </div>
          </div>
      </div>
      <div className=' bg-white w-[35%] z-auto h-[850px]'>
          <div className='flex flex-row border-b-[1px] border-lightgray justify-between p-2'>
            <span className='text-purple'><FaLink/></span>
            <span className='text-2xl text-gray font-bold'>&times;</span>
          </div>
          <div className='flex flex-row justify-between border-b-[1px] border-lightgray'>
            <h1 className='text-xl text-zblue h-20 p-2'>Los Angeles,CA,USA</h1>
            <span className='mt-5 mr-5'><FaBookmark style={style} /></span>
          </div>
          <div className='flex flex-row justify-around mt-3 border-b-[1px] border-lightgray p-3'>
            <button className='p-1  text-sm text-zblue rounded  hover:border-zblue hover:border-[1px]'>Zone Data</button>
            <button className='p-1 text-sm text-zblue rounded hover:border-zblue hover:border-[1px]'>Permitted use</button>
            <button className='p-1 text-sm text-zblue rounded hover:border-zblue hover:border-[1px]'>Controls</button>
            <button className='p-1 text-sm text-zblue rounded hover:border-zblue hover:border-[1px]'>Overlays</button>
          </div>
          <div className='h-[500px] overflow-auto p-5 border-b-[1px] border-lightgray'>
              <ul className='leading-10'>
                <li>Zone Code</li>
                  <li className='text-gray'>C35</li>
                <li>Zone name</li>
                <ul>
                  <li className='text-gray'>C4</li>
                </ul>
                <li>Zone type</li>
                <ul>
                  <li className='text-gray'>Comercial</li>
                </ul>   
              </ul>
          </div>
          <div className='flex flex-wrap flex-row p-4 justify-around'>
              <button className='p-2 gap-1 bg-zblue text-sm text-white w-36 h-10 rounded flex flex-row font-bold'><span className=''><FaFileAlt style={btnstyle}/></span><span>Get Report</span></button>
              <button className='p-2 gap-1 bg-zblue text-sm text-white w-36 h-10 rounded flex flex-row font-bold'><div><FaUndo style={btnstyle}/></div><div>Order Report</div></button>
              <button className='p-2 gap-1 bg-zblue text-sm text-white w-36 h-10 rounded flex flex-row font-bold basis-1/3'><FaDownload style={btnstyle}/><span>CSV Download</span></button>
          </div>
      </div>
      </div>
    </>
  );
}


export default App;
