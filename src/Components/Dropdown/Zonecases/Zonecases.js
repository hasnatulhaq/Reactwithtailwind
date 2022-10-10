




function ZoneCases(props){
    return(
        <>
            {props.zonetitle}
                <div className="h-4/5 border-t-[1px] border-b-[1px] p-5 border-zlightgray overflow-auto">
                    <ul className="flex gap-7 flex-col">
                    {props.zonelist.map((data)=>(
                        <li className="flex gap-2 items-center uppercase text-xs text-zzonecase font-semibold"><input type="checkbox" className="w-4 h-4 border-[3px] border-zblue"/>{data.zonecode}</li>
                    ))}
                    </ul>
                </div>
        </>
    )
}


export default ZoneCases