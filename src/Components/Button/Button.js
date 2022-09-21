import {FaFilter} from 'react-icons/fa';

function Button({icon , text}){


  const filterstyle = { color : "lightgray"}
    return(
        <>
          <div className="shadow-sm text-zsm border-[1px] rounded-[4px] text-center py-1.5 px-1.5 border-lightgray text-gray h-8 w-[150px] mt-2 flex flex-row justify-between font-medium"><div>{text}</div> <span className='border-l-[1px] h-5  border-lightgray'></span> <span className="mt-1">{icon}</span></div>
        </>
    )
}

export default Button