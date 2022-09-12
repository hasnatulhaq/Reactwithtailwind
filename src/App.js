// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <nav className=' bg-white bottom-2 border-b-[1px] h-20 text-center pt-7 border-lightgray'>
               <div className='flex ml-16 mr-16 flex-wrap'>
               <span className='text-xl text-purple'>Zoneomics<sup className='text-purple border-[1px] text-sm'><small>PRO</small></sup></span>
               <ul className="bg-red flex space-x-14 text-gray gap-x-2 ml-14 ">
                   <li>Dashboard</li>
                   <li>Zoning Data</li>
                   <li>API Docs</li>
                   <li>All Cities</li>
               </ul>
               <div className='text-xl flex items-end bg-purple flex-end ml-40 rounded-xl'>Profile</div>
               </div>
      </nav>
      <div className='w-full h-16 bg-white p-3 flex flex-wrap gap-10'>
           <input type="text" placeholder="Search address"  className="border-[1px] border-lightgray w-96 h-10 ml-16 rounded-lg p-2"></input>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Zone Picker <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Plu Filter <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Propect <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Zone Cases <span className="border-[1px] border-lightgray">filter</span></div>
           <div className="border-[1px] rounded-lg text-center pt-1 pl-1 pr-1 border-lightgray text-gray">Lisitings <span className="border-[1px] border-lightgray">filter</span></div>
      </div>
      <div className='h-screen bg-purple font-bold items-center w-full'>
        <h1>Map Div</h1>
        <div className='bg-white w-32 border-[1px] top-9 z-[300] h-60 ml-16 mt-36 border-lightgray rounded-md text-center'><p>legend</p></div>
      </div>
      <div className=' bg-lightgray w-52 h-4/5'>
         
      </div>
     
      {/* <h1 className="text-3xl font-bold">
      Below navbar
    </h1> */}
    </>
    
  );
}

export default App;
