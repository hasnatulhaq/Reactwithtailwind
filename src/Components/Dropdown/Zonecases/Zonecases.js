import Selectdropdown from "../Selectdropdown/Selectdropdown"

function ZoneCases(props){
    return(
        <>
            {props.zonetitle}
                <div className="h-4/5 border-t-[1px] border-b-[1px] p-5 border-zlightgray overflow-auto">
                 <div className="flex flex-col gap-5">
                 <Selectdropdown title="zones" placeholder="Select a zone"/>
                 <Selectdropdown title="Plu Filter" placeholder="Select Permitted land use"/>
                 </div>
                    <ul className="flex gap-7 flex-col mt-10">
                    {props.zonelist.map((data)=>(
                        <li className="flex gap-2 items-center uppercase text-xs text-zzonecase font-semibold"><input type="checkbox" className="w-4 h-4 border-[3px] border-zblue"/>{data.zonecode}</li>
                    ))}
                    </ul>
                </div>
        </>
    )
}


export default ZoneCases