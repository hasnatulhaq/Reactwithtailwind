import { ReactComponent as Cross } from "../../../images/cross.svg";
import Rightbarbtn from "../../Rightbarbtn/Rightbarbtn";



function ControlsDropdown(props){
    return(
        <>
            <div className="bg-zmapmenu h-auto w-[95%] ml-16 mt-11 rounded-md flex flex-col p-2 gap-2 absolute">
            <div className="flex justify-end"><Cross className="h-5 w-5"/></div>
            {props.Headingdiv}
            <Rightbarbtn text="Print Pdf" icon={<Cross className="h-5 w-5"/>}/>
            </div>
        </>
    )
}

export default ControlsDropdown