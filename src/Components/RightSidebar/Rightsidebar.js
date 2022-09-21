import Rightbarbtn from '../Rightbarbtn/Rightbarbtn';
import Rightbartab from '../Rightbartab/Rightbartab';
import {FaFileAlt, FaUndo, FaDownload,FaLink, FaBookmark} from 'react-icons/fa';



function RightSidebar(){


    const style = { color: "lightgray", fontSize: "1.5em" }
    const btnstyle ={ fontSize: "1.0rem"}

    return(
        <>
           <div className=' bg-white w-[30%] h-[86%] z-auto absolute right-0 bottom-0'>
          <div className='flex flex-row border-b-[1px] border-lightgray justify-between p-2'>
            <span className='text-purple'><FaLink/></span>
            <span className='text-2xl text-gray font-bold'>&times;</span>
          </div>
          <div className='flex justify-between border-b-[1px] border-lightgray px-4'>
            <h1 className='text-xl text-zblue h-20 p-2'>Los Angeles,CA,USA</h1>
            <span className='mt-5 mr-5'><FaBookmark style={style} /></span>
          </div>
          <div className='flex w-full border-b-[1px] border-lightgray p-4'>
            <Rightbartab text={"Zone Data"}/>
            <Rightbartab text={"Permitted use"}/>
            <Rightbartab text={"Controls"}/>
            <Rightbartab text={"Overlays"}/>
          </div>
          <div className='h-[500px] overflow-auto p-5'>
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
          <div className='flex p-4 gap-1 bottom-0 absolute w-full border-t-[1px] border-lightgray'>
              <Rightbarbtn text={"Get Report"} icon={<FaFileAlt style={btnstyle}/>}/>
              <Rightbarbtn text={"Order Report"} icon={<FaUndo style={btnstyle}/>}/>
              <Rightbarbtn text={"CSV Download"} icon={<FaDownload style={btnstyle}/>}/>
          </div>
      </div>
        </>
    )
}


export default RightSidebar