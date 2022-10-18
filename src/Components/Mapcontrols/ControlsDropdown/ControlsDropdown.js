import classNames from "classnames";
import { ReactComponent as Cross } from "../../../images/cross.svg";
import { ReactComponent as Print } from "../../../images/o-print.svg";
import Rightbarbtn from "../../Rightbarbtn/Rightbarbtn";

function ControlsDropdown(props) {
  console.log(props);
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
      <Rightbarbtn
        text="Print Pdf"
        icon={<Print className="h-5 w-5 fill-white" />}
      />
    </div>
  );
}

export default ControlsDropdown;
