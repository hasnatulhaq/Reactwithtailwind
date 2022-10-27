import ControlsDropdown from "./ControlsDropdown/ControlsDropdown";
import Headingdiv from "./Headingdiv/Headingdiv";
import Rightbarbtn from "../Rightbarbtn/Rightbarbtn";
import { ReactComponent as Print } from "../../images/o-print.svg";
import { ReactComponent as Screenshot } from "../../images/o-screenshot.svg";
import Slider from "../../Components/Mapcontrols/Slider";
import Listbox from "./Listbox/Listbox";

export default function ControlTray({ index , datafromchild }) {
  return (
    <>
      <ControlsDropdown
        hidden={index === 0}
        width="90%"
        layer={<Listbox/>}
        datafromchild={datafromchild}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="opacity" />}
        Slider={<Slider/>} 
        hidden={index === 1}
        datafromchild={datafromchild}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Screenshot" />}
        hidden={index === 2}
        datafromchild={datafromchild}
        button={<Rightbarbtn
          text="Screenshot"         
          icon={<Screenshot className="h-4 w-5 fill-white" />}
        />}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Print this map to a pdf document along with the legends" />}
        hidden={index === 3}
        datafromchild={datafromchild}
        button={<Rightbarbtn
          text="Print"
          icon={<Print className="h-5 w-5 fill-white" />}
        />}
      />
    </>
  );
}
