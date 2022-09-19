import './App.css';
import '../src/global.css'
import {FaFilter,FaBookmark, FaMapPin} from 'react-icons/fa';
import Colorpicker from './images/colorpicker-s.svg';
import MapsGoogle from './Components/Googlemap/MapsGoogle';
import {Autocomplete} from '@react-google-maps/api';
import Button from './Components/Button/Button';
import Navbar from './Components/Navbar/Navbar';
import RightSidebar from './Components/RightSidebar/Rightsidebar';


function App() {

  const style = { color: "lightgray", fontSize: "1.5em" }
  const filterstyle = { color : "lightgray"}
  const mappin={color : "gray" , fontSize : "1.0em"}
  return (
    <>
    {/* Top navbar */}
       <Navbar/>
    {/* search menu  */}
      <div className='w-full h-16 bg-white p-3 flex gap-10'>
           <div className='border-[1px] border-lightgray w-1/4 h-10 ml-16 rounded-lg p-2 flex flex-row gap-2'>
            <div>
            <FaBookmark style={style}/>
            </div>
            <span className='border-[1px] w-[1px] border-lightgray'></span>
            <div>
            <Autocomplete
      // onLoad={(e)=>setAutocomplete(e)}
      //  onPlaceChanged={onPlaceChanged}
       restrictions={{country: "us"}}>
        <input id='place-id' type='text' placeholder='Search address' className='focus:outline-none'/>
      </Autocomplete>
            </div>
           </div>
           <div className='flex flex-row gap-10'>
           <Button text={"Zone Picker"} icon={<FaFilter style={filterstyle}/>}/>
           <Button text={"Plu Filter"} icon={<FaFilter style={filterstyle}/>}/>
           <Button text={"Prospect"} icon={<FaFilter style={filterstyle}/>}/>
           <Button text={"Zone Cases"} icon={<FaMapPin style={mappin}/>}/>
           <Button text={"Listings"} icon={<FaMapPin style={mappin}/>}/>
           </div>
      </div>
      <div className='flex bg-metal h-[30%]'>
      <div className='font-bold items-center w-full'>
         <MapsGoogle/>
        <div className='bg-white w-40 border-[1px] z-[300] h-60 ml-16 mt-[500px] border-lightgray rounded-md text-center bottom-5 absolute overflow-auto'>
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
      <RightSidebar/>
      </div>
    </>
  );
}


export default App;
