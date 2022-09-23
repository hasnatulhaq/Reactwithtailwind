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
  // const mappin={color : "gray" , fontSize : ""}
  const mappin={colo:"gray"}
  return (
    <>
    {/* Top navbar */}
       <Navbar/>
    {/* search menu  */}
      <div className='w-full lg:h-16 bg-white p-3 flex gap-5 lg:flex-row md:flex-col sm:flex-col sm:h-24'>
           <div className='border-[1px] border-lightgray w-2/6 h-10 ml-16 rounded-lg p-2 flex flex-row gap-3 shadow-sm '>
            <div className='px-5'>
            <FaBookmark style={style}/>
            </div>
            <span className='border-l-[1px] border-lightgray'></span>
            <div>
            <Autocomplete
      // onLoad={(e)=>setAutocomplete(e)}
      //  onPlaceChanged={onPlaceChanged}
       restrictions={{country: "us"}}>
        <input id='place-id' type='text' placeholder='Search address' className='focus:outline-none'/>
      </Autocomplete>
            </div>
           </div>
           <div className='flex gap-4 lg:flex-row md:flex-col items-end'>
           <Button text={"Zone Picker"} icon={<FaFilter style={filterstyle}/>}/>
           <Button text={"Plu Filter"} icon={<FaFilter style={filterstyle}/>}/>
           <Button text={"Prospect"} icon={<FaFilter style={filterstyle}/>}/>
           <Button text={"Zone Cases"} icon={<FaMapPin style={mappin}/>}/>
           <Button text={"Listings"} icon={<FaMapPin style={mappin}/>}/>
           </div>
      </div>
     
      <div className='items-center w-full'>
         <MapsGoogle/>
        <div id="legend" className='bg-white w-52 border-[1px] z-[300] h-80 ml-16 mt-[500px] flex flex-col border-lightgray rounded-md text-center bottom-5 absolute '>
          {/* <div className='border-[2px] rounded-full border-zblue w-8 h-8 absolute top-[-8px] right-[-8px] bg-purple'> */}
            <div className='flex justify-center items-center border-zblue bg-white border-[1px] w-8 h-8 rounded-full top-[-10px] right-[-10px] absolute'>
          <img src={Colorpicker} alt="color picker" className='h-4'/>
            </div>
          {/* </div> */}
        {/* <img src={Colorpicker} alt="color picker" className='rounded border-[1px] border-zblue w-5 self-end absolute'/> */}
           <div className='border-b-[1px] border-lightgray text-zgray flex flex-row justify-center p-2 uppercase text-zsm font-medium'>
              Zone Legend
           </div>
           <div className='text-left font-normal overflow-auto'>
               <ul className='p-3'>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><h3>code</h3></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><h3>code</h3></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><h3>code</h3></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><h3>code</h3></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                   <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 bg-purple'></div><div>code</div></li>
                
               </ul>
           </div>
          </div>
      </div>
      <RightSidebar/>
    </>
  );
}


export default App;
