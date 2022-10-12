


function Counter({title}){
    return(
        <div>
            <div className="text-xs text-gray">{title}</div>
           <div className="flex flex-row bg-gray border-[1px] border-zlightgray rounded-md">
                   <div className="w-1/4 text-white h-full justify-center flex">-</div>
                   <div className="bg-white w-1/2 flex justify-center">0</div>
                   <div className="w-1/4 text-white h-full justify-center flex">+</div>
            </div>
        </div>   
    )
}


export default Counter