import { ReactComponent as Bookmark } from "../../bookmark.svg";
import {ReactComponent as Favourite} from "../../images/favourite-heart.svg"
import { ReactComponent as Pin } from "../../images/pin-o.svg";
import { ReactComponent as Filter } from "../../images/filter-button.svg";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";
import Dropdownsearch from "../Dropdown/Dropdownsearch/Dropdownsearch";
import Dotteddiv from "../Dropdown/Dotteddiv/Dotteddiv";
import ZoneCases from "../Dropdown/Zonecases/Zonecases";
import Counter from "../Counter/Counter";
import Autosearch from "../Autosearch/Autosearch";


function  Mapbar({onPlaceChanged, setAutocomplete , zone}){

    const [index , setIndex] = useState()
    
    const datafromchild =(data)=>{
          setIndex(data)
    }

    const zonelist = [
      { zonecode: "arts-1"},
      { zonecode: "arts-2"},
      { zonecode: "arts-3"},
      { zonecode: "arts-4"},
      { zonecode: "arts-5"},
      { zonecode: "arts-6"},
      { zonecode: "arts-7"},
      { zonecode: "arts-8"},
      { zonecode: "arts-9"},
      { zonecode: "arts-10"},
      { zonecode: "arts-11"},
      { zonecode: "arts-12"},
      { zonecode: "arts-13"},
      { zonecode: "arts-14"},
    ];


    return(
      <div className="w-full lg:h-full bg-white p-3 flex gap-5 lg:flex-row md:flex-col sm:flex-col sm:h-24 relative">
      
        <div className="border-[1px] border-zlightgray lg:w-2/6 h-11 ml-5 rounded-lg p-2 flex flex-row gap-3 shadow-sm px-6 md:w-full">
          <button className="px-2">
            <Bookmark className="fill-zlightgray h-6 w-6 mx-auto my-auto" />
          </button>
          <span className="border-l-[1px] border-zlightgray"></span>
          <div className="self-center">
            <Autosearch onPlaceChanged={onPlaceChanged} setAutocomplete={setAutocomplete}/>
          </div>
        </div>
        <div className="flex gap-4 lg:flex-row items-end">
          <div>
          <Button
            text={"Zone Picker"}
            icon={<Filter className="h-2.5 fill-gray"/>}
            onClick={() => {
              setIndex(0);
            }}
          />
          <Dropdown title="Zone Filter" dotteddiv={<Dotteddiv/>}  btntextl="Filter" filtersearch={<Dropdownsearch placeholder="Search for zone cases..."/>} btntextr="Clear Filter" zonecases={<ZoneCases height={"h-4/5"} case={"lowercase"} zonetitle="zone cases" zonelist={zonelist}/>} hidden={index !==0}  datafromchild={datafromchild}/>
          </div>
          <div>
          <Button
            text={"Plu Filter"}
            icon={<Filter className="h-2.5 fill-gray" />}
            onClick={() => {
              setIndex(1);
            }}
          />
           <Dropdown title="Plu Filter" btntextl="Filter" btntextr="Clear Filter" filtersearch={<Dropdownsearch placeholder="Search for permitted land use"/>} zonecases={<ZoneCases case={"uppercase"} zonetitle="Plu data" zonelist={zonelist}/>} hidden={index !==1} datafromchild={datafromchild}/>
          </div>
          <div>
          <Button
            text={"Prospect"}
            icon={<Filter className="h-2.5 fill-gray" />}
            onClick={() => {
              setIndex(2);
            }}
          />
           <Dropdown title="Prospect Filter" filterzone={<ZoneCases height={"h-90%"} zonetitle="Filter zone"/>}  zonecases={<ZoneCases zonetitle="Parcel size" counter={<Counter title="min"/>} counters={<Counter title="max"/>}/>}   parcelsize={<ZoneCases zonetitle="Parcel Size" counter={<Counter title="min"/>} counters={<Counter title="max"/>}/>} btntextl="Filter" icon={<Favourite className="w-10 h-10 fill-zlightgray"/>} btntextr="Clear Filter" zonelist={zonelist} hidden={index !==2} datafromchild={datafromchild}/>
          </div>
          <div>
          <Button
            text={"Zone Cases"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
          </div>
          <div>
          <Button
            text={"Listings"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
          </div>
        </div>
      </div>
    )
}

export default Mapbar