// import {FaFilter} from 'react-icons/fa';

function Button({icon , text}){


  // const filterstyle = { color : "lightgray"}
    return(
        <>
          <div className="shrink shadow-sm text-zsm border-[1px] rounded-[4px] p-2 gap-3 justify-center border-lightgray text-gray h-8 w-[145px] flex font-medium"><p>{text}</p> <span className='border-l-[1px] h-4  border-lightgray'></span> <span className="self-center">{icon}</span></div>
        </>
    )
}

export default Button