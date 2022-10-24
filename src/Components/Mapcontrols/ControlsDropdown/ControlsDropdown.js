import classNames from "classnames";
import { ReactComponent as Cross } from "../../../images/cross.svg";


function ControlsDropdown(props) {
   console.log(props.width , "width of the component")
  return (
    <div
      className={classNames(
        "bg-zmapmenu h-auto w-[95%] ml-16 mt-11 rounded-md flex flex-col p-2 gap-2 absolute",
        {
          "!hidden": !props.hidden,
        }
      )}
    >
      <div className="flex justify-end">
        <Cross className="h-5 w-5" />
      </div>
      {props.headingdiv}
      {props.Slider}
      {props.button}
    </div>
  );
}

export default ControlsDropdown;
