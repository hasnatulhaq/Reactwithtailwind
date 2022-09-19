import {FaFilter} from 'react-icons/fa';

function Button({icon , text}){


  const filterstyle = { color : "lightgray"}
    return(
        <>
          <div className=" shadow-sm text-zsm border-[1px] rounded-lg text-center py-1.5 px-1.5 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between"><div>{text}</div> <span className='border-[1px] h-5 w-[1px] border-lightgray'></span> <span className="mt-1">{icon}</span></div>
        </>
    )
}

export default Button