import React from "react";
import ControlsDropdown from "./ControlsDropdown/ControlsDropdown";
import Headingdiv from "./Headingdiv/Headingdiv";

export default function ControlTray({ index }) {
  return (
    <>
      <ControlsDropdown
        headingdiv={<Headingdiv text="Print pdf" />}
        hidden={index === 0}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="opacity" />}
        hidden={index === 1}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Screenshot" />}
        hidden={index === 2}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="print" />}
        hidden={index === 3}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="zoning" />}
        hidden={index === 4}
      />
      <ControlsDropdown
        headingdiv={<Headingdiv text="Print pdf" />}
        hidden={index === 5}
      />
    </>
  );
}
