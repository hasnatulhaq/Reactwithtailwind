// import logo from './logo.svg';
import './App.css';
// import Button from './Components/Button/Button';

function App() {
  return (
    <>
    <nav className=' bg-white bottom-2 border-b-[1px] h-20 text-center pt-7 border-lightgray flex flex-row'>
               <div className='flex ml-16 mr-16 flex-wrap'>
               <span className='text-xl text-purple'>Zoneomics<sup className='text-purple border-[1px] text-sm'><small>PRO</small></sup></span>
               <ul className="bg-red flex space-x-14 text-gray gap-x-2 ml-14 ">
                   <li>Dashboard</li>
                   <li>Zoning Data</li>
                   <li>API Docs</li>
                   <li>All Cities</li>
               </ul>
               </div>
               <div className='text-xl flex items-end bg-purple flex-end ml-40 rounded-full'>Profile</div>
      </nav>
      <div className='w-full h-16 bg-white p-3 flex flex-wrap gap-10'>
           <input type="text" placeholder="Search address"  className="border-[1px] border-lightgray w-96 h-10 ml-16 rounded-lg p-2"></input>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Zone Picker <span className="border border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Plu Filter <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Propect <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Zone Cases <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Lisitings <span className="border-[1px] border-lightgray">filter</span></div>
      </div>
      <div className='flex bg-metal h-[40%]'>
      <div className=' bg-purple font-bold items-center w-full'>
        <h1>Map Div</h1>
        <div className='bg-white w-32 border-[1px] z-[300] h-60 ml-16 mt-[500px] border-lightgray rounded-md text-center bottom-0'>
           <div className='border-b-[1px] border-lightgray font-normal'>
               Legend
           </div>
           <div className='text-left font-normal'>
               <ul>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li><span className='bg-gray rounded'></span>code</li>
                   <li></li>
               </ul>
           </div>
          </div>
      </div>
      <div className=' bg-white w-[35%] z-auto h-[850px]'>
          <div className='flex flex-row border-b-[1px] border-lightgray justify-between p-2'>
            <p>link</p>
            <span className='text-xl text-gray font-bold '>&times;</span>
          </div>
          <div>
            <h1 className='text-xl text-zblue h-20 p-2 border-b-[1px] border-lightgray'>Los Angeles,CA,USA</h1>
          </div>
          <div className='flex flex-row flex-wrap justify-around mt-4 border-b-[1px] border-lightgray p-3'>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Zone Data</button>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Permitted use</button>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Controls</button>
            <button className='border-[1px] p-1 border-zblue text-sm text-zblue rounded'>Overlays</button>
            {/* <Button/> */}
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
              </ul>
          </div>
          <div className='flex flex-wrap flex-row p-4 justify-around'>
              <button className='p-1 bg-zblue text-sm text-white w-36 h-10 rounded'>Get Report</button>
              <button className='p-1 bg-zblue text-sm text-white w-36 h-10 rounded'>Order Report</button>
              <button className='p-1 bg-zblue text-sm text-white w-36 h-10 rounded'>CSV Download</button>
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
