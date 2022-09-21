
import logo  from '../../images/zoneomics_full.png'


function Navbar(){
    return(
        <>
         <nav className=' bg-white bottom-2 border-b-[1px] h-20 text-center pt-6 p-5 border-lightgray flex flex-row'>
               <div className='flex w-full flex-row  ml-16 mr-16 '>
               <img src={logo} alt="logo rezone" className="text-xl h-[40px] mb-5"/><sup className='text-purple border-[1px] text-zsm p-3 h-5 rounded'>Pro</sup>
               <div className='mt-3'>
               <ul className="flex space-x-14 text-gray gap-x-1 ml-14 text-sm font-medium">
                   <li>Dashboard</li>
                   <li>Zoning Data</li>
                   <li>API Docs</li>
                   <li>All Cities</li>
               </ul>
               </div>
               </div>
               <div className='text-xl text-white flex bg-zgray flex-end rounded-full mr-auto text-center h-10 w-10'>H</div>    
        </nav>
        </>
    )
}

export default Navbar