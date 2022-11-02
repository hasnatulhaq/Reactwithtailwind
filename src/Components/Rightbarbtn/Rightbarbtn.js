

function Rightbarbtn({text , icon , bgcolor}){
    return(

            <button  className={`p-3 gap-3 text-zsm bg-${bgcolor} text-white w-full h-9 rounded flex font-normal justify-center align-middle items-center`}>{icon}<span>{text}</span></button>
    
    )
}

export default Rightbarbtn



