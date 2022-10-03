




function Button({icon , text}){

    return(
        <>
          {console.log(icon)}
          <button className="shrink shadow-sm text-zsm border-[1px] rounded-[4px] p-3 gap-3 justify-center items-center border-zlightgray text-gray h-7 w-[145px] flex font-medium"><p>{text}</p> <span className='border-l-[1px] h-4  border-zlightgray'></span> <span className="self-center">{icon}</span></button>
        </>
    )
}

export default Button