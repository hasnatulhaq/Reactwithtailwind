
import logo  from '../../images/zoneomics_full.png'


function Navbar(){

    const legenddata = [
        {menu: "Dashboard"},
        {menu: "Zoning Data"},
        {menu: "API Docs"},
        {menu: "All Cities"},
      ];

    return(
        <>
         <nav className=' bg-white border-b-[1px] h-[64px] pt-4 p-4 border-zlightgray flex flex-row lg:bg-white'>
               <div className='flex w-full flex-row ml-4 mr-16'>
                <div className='flex flex-row h-full justify-center items-center gap-[0.2rem]'>
                <img src={logo} alt="logo rezone" className="h-[36px] w-[136px]"/>
               <div className='border-[1px] text-zpro text-zsm p-[3px] mb-4 w-[46.84px] font-medium flex justify-center items-center h-[22px] rounded-[3px] align-top border-zborder'>Pro</div>
                </div>
               <div className='mt-[6px] ml-1'>
               <ul className="lg:flex md:flex text-gray lg:ml-32 text-sm font-medium leading-5  lg:space-x-32 md:space-x-20 md:ml-10 sm:hidden">
                  {legenddata.map((data)=>(
                       <li className='hover:text-zblue tracking-wide'>{data?.menu}</li>
                  ))}
               </ul>
               </div>
               </div>
               <div className='text-white text-base flex justify-center items-center bg-zmapmenu rounded-[55px] h-[36px] w-[40px] self-center mr-4 font-medium'>A</div>    
        </nav>
        </>
    )
}

export default Navbar