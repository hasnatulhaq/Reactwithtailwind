
import logo  from '../../images/zoneomics_full.png'


function Navbar(){
    return(
        <>
         <nav className=' bg-white bottom-2 border-b-[1px] h-[70px] pt-6 p-5 border-zlightgray flex flex-row small:bg-metal'>
               <div className='flex w-full flex-row ml-4 mr-16 '>
               <img src={logo} alt="logo rezone" className="h-[35px] w-36 mb-5"/><sup className='text-purple border-[1px] text-zsm p-2 h-5 rounded'>Pro</sup>
               <div className=''>
               <ul className="flex space-x-32 text-gray ml-32 text-sm font-medium">
                   <li className='hover:text-zblue'>Dashboard</li>
                   <li className='hover:text-zblue'>Zoning Data</li>
                   <li className='hover:text-zblue'>API Docs</li>
                   <li className='hover:text-zblue'>All Cities</li>
               </ul>
               </div>
               </div>
               <div className='text-white text-xl flex justify-center items-center bg-zbrown rounded-[55px] h-10 w-[45px] self-center'>H</div>    
        </nav>
        </>
    )
}

export default Navbar