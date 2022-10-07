import { ReactComponent as Bookmark } from "../../bookmark.svg";
import { ReactComponent as Pin } from "../../images/pin-o.svg";
import { ReactComponent as Filter } from "../../images/filter-button.svg";
import { Autocomplete } from "@react-google-maps/api";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";


function  Mapbar(){

    const [index , setIndex] = useState()

    return(
        <>
        <div className="w-full lg:h-full bg-white p-3 flex gap-5 lg:flex-row md:flex-col sm:flex-col sm:h-24 relative">
        <div className="border-[1px] border-zlightgray lg:w-2/6 h-11 ml-5 rounded-lg p-2 flex flex-row gap-3 shadow-sm px-6 md:w-full">
          <button className="px-2">
            <Bookmark className="fill-zlightgray h-6 w-6 mx-auto my-auto" />
          </button>
          <span className="border-l-[1px] border-zlightgray"></span>
          <div className="self-center">
            <Autocomplete
              // onLoad={(e)=>setAutocomplete(e)}
              //  onPlaceChanged={onPlaceChanged}
              restrictions={{ country: "us" }}
            >
              <input
                id="place-id"
                type="text"
                placeholder="Search for zoning data"
                className="focus:outline-none"
              />
            </Autocomplete>
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
            <Dropdown title="Zone Filter" btntextl="Filter" btntextr="Clear Filter" hidden={index !==0}/>
          </div>
          <div>
          <Button
            text={"Plu Filter"}
            icon={<Filter className="h-2.5 fill-gray" />}
          />
           <Dropdown title="Zone Filter" btntextl="Filter" btntextr="Clear Filter" hidden={index !==1}/>
          </div>
          <div>
          <Button
            text={"Prospect"}
            icon={<Filter className="h-2.5 fill-gray" />}
          />
           <Dropdown title="Zone Filter" btntextl="Filter" btntextr="Clear Filter" hidden={index !==2}/>
          </div>
          <div>
          <Button
            text={"Zone Cases"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
           <Dropdown title="Zone Filter" btntextl="Filter" btntextr="Clear Filter" hidden={index !==3}/>
          </div>
          <div>
          <Button
            text={"Listings"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
           <Dropdown title="Zone Filter" btntextl="Filter" btntextr="Clear Filter" hidden={index !==4}/>
          </div>
          
        </div>
      </div>
        </>
    )
}

export default Mapbar