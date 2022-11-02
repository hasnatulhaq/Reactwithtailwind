import classNames from "classnames";
import { ReactComponent as Cross } from "../../../images/cross.svg";


function ControlsDropdown(props) {
         const data = -1;
 
  return (
    <div
       
      className={classNames(
        `bg-zmapmenu h-auto   ml-16 mt-11 rounded-md flex flex-col p-2 gap-2 absolute`,
        {
          "!hidden": !props.hidden,
        },
          {
          "w-[80%]": props.flag,
        },
        // {
        // //   'w-[70%]': props.w70,
        // // }
      )}
    >
      <div className="flex justify-end cursor-pointer" onClick={()=>{props.datafromchild(data)}}>
        <Cross className="h-5 w-5  fill-crosscolor hover:fill-gray"/>
      </div>
      {props.layer}
      {props.headingdiv}
      {props.Slider}
      {props.button}

   
    </div>
  );
}

export default ControlsDropdown;
