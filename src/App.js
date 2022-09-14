// import logo from './logo.svg';
import './App.css';
import '../src/global.css'
import Map from './Components/Map/Map';
import {FaFileAlt, FaUndo, FaDownload, FaFilter, FaLink, FaBookmark } from 'react-icons/fa';

// import Button from './Components/Button/Button';
// import Map from './Components/Map/Map'

function App() {
  const filterstyle = { color : "lightgray"}
  const style = { color: "lightgray", fontSize: "1.5em" }
  return (
    <>
    {/* Top navbar */}
    <nav className=' bg-white bottom-2 border-b-[1px] h-20 text-center pt-6 p-5 border-lightgray flex flex-row'>
               <div className='flex w-full flex-row  ml-16 mr-16 '>
               <span className='text-xl text-purple'>Zoneomics<sup className='text-purple border-[1px] text-sm'><small>PRO</small></sup></span>
               <ul className="bg-red flex space-x-14 text-gray gap-x-2 ml-14">
                   <li>Dashboard</li>
                   <li>Zoning Data</li>
                   <li>API Docs</li>
                   <li>All Cities</li>
               </ul>
               </div>
               <div className='text-xl text-white flex items-end bg-zgray flex-end ml-40 w-12 rounded-full mr-auto text-center'>H</div>    
      </nav>
      {/* search menu  */}
      <div className='w-full h-16 bg-white p-3 flex gap-10'>
           <input type="text" placeholder="Search address"  className="border-[1px] border-lightgray w-96 h-10 ml-16 rounded-lg p-2"></input>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[135px] mt-2 flex flex-row justify-between">Zone Picker <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[135px] mt-2 flex flex-row justify-between">Plu Filter <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[135px] mt-2 flex flex-row justify-between">Propect <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[135px] mt-2 flex flex-row justify-between">Zone Cases <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray h-8 w-[135px] mt-2 flex flex-row justify-between">Lisitings <span className="mt-1"><FaFilter style={filterstyle}/></span></div>
      </div>
      <div className='flex bg-metal h-[30%]'>
      <div className='font-bold items-center w-full'>
         <Map/>
        <div className='bg-white w-32 border-[1px] z-[300] h-60 ml-16 mt-[500px] border-lightgray rounded-md text-center bottom-5 absolute overflow-auto'>
           <div className='border-b-[1px] border-lightgray font-normal'>
               Legend
           </div>
           <div className='text-left font-normal'>
               <ul>
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
          <div className='flex flex-row flex-wrap justify-around mt-4 border-b-[1px] border-lightgray p-3'>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Zone Data</button>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Permitted use</button>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Controls</button>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Overlays</button>
          </div>
          <div className='h-[500px] overflow-auto p-5 border-b-[1px] border-lightgray'>
              <ul>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
                <li>Zone Code</li>
                <li>Zone name</li>
                <li>Zone type</li>
              </ul>
          </div>
          <div className='flex flex-wrap flex-row p-4 justify-around'>
              <button className='p-2 bg-zblue text-sm text-white w-36 h-10 rounded flex flex-row  font-bold'><span className=''><FaFileAlt/></span><span>Get Report</span></button>
              <button className='p-1 bg-zblue text-sm text-white w-36 h-10 rounded flex flex-row  font-bold'><FaUndo/><span>Order Report</span></button>
              <button className='p-1 bg-zblue text-sm text-white w-36 h-10 rounded flex flex-row  font-bold'><FaDownload/><span>CSV Download</span></button>
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
