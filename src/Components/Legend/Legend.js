
import {ReactComponent as Colorpicker} from '../../images/colorpicker-s.svg';

// import {ReactComponent as Colorpicker} from './images/colorpicker-s.svg';




function Legend(){

    const legenddata = [
        { color: "bg-purple", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },
        { color: "red", zonename: "1" },
        { color: "blue", zonename: "2" },
        { color: "green", zonename: "3" },

      ];
     
    return(
        <>
           <div id="legend" className='bg-white w-56 border-[1px] z-[300] h-96 ml-16 mt-[500px] flex flex-col border-zlightgray rounded-[14px] text-center bottom-5 absolute '>
            <div className='flex justify-center items-center border-zblue bg-white border-[2px] w-9 h-9 rounded-full top-[-10px] right-[-10px] absolute'>
                 <Colorpicker className="fill-zblue h-4"/>
            </div>
           <div className='border-b-[1px] border-zlightgray text-zgray flex flex-row justify-center p-3 uppercase text-zsm font-medium'>
              Zone Legend
           </div>
           <div className='text-left font-normal overflow-auto'>
               <ul className='p-3'>
                    {legenddata.map((data)=>(
                         <li className='flex gap-2 items-center'><div className='w-3 rounded-full h-3 ${data.color}'></div><h3>{data.zonename}</h3></li>
                    ))}
               </ul>
           </div>
          </div>
        </>
    )
}


export default Legend