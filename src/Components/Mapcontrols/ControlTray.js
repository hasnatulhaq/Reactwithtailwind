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
        flag={true}
        layer={<Listbox/>}
        datafromchild={datafromchild}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Use the range below to control the opacity of zone colors" />}
        Slider={<Slider/>} 
        width="90%"
        hidden={index === 1}
        datafromchild={datafromchild}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Take a screenshot of the Zoning Map." />}
        hidden={index === 2}
        width="90%"
        datafromchild={datafromchild}
        button={<Rightbarbtn
          text="Screenshot"         
          icon={<Screenshot className="h-4 w-5 fill-white" />}
          bgcolor={"bg-traybutton"}
        />}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Print this map to a pdf document along with the legends" />}
        hidden={index === 3}
        width="90%"
        datafromchild={datafromchild}
        button={<Rightbarbtn
          text="Print"
          icon={<Print className="h-5 w-5 fill-white" />}
          bgcolor={"bg-traybutton"}
        />}
      />
    </>
  );
}
