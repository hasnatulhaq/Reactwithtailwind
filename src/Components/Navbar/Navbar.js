
import logo  from '../../images/zoneomics_full.png'


function Navbar(){
    return(
        <>
         <nav className=' bg-white bottom-2 border-b-[1px] h-20 pt-6 p-5 border-lightgray flex flex-row sm:bg-purple'>
               <div className='flex w-full flex-row  ml-16 mr-16 '>
               <img src={logo} alt="logo rezone" className="text-xl h-[40px] mb-5"/><sup className='text-purple border-[1px] text-zsm p-3 h-5 rounded'>Pro</sup>
               <div className='mt-3'>
               <ul className="flex space-x-14 text-gray ml-14 text-sm font-medium">
                   <li className='hover:text-zblue'>Dashboard</li>
                   <li className='hover:text-zblue'>Zoning Data</li>
                   <li className='hover:text-zblue'>API Docs</li>
                   <li className='hover:text-zblue'>All Cities</li>
               </ul>
               </div>
               </div>
               <div className='text-white text-xl flex justify-center items-center bg-gray rounded-[55px] h-12 w-[55px] self-center'>H</div>    
        </nav>
        </>
    )
}

export default Navbar