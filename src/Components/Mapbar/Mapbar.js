import { ReactComponent as Bookmark } from "../../bookmark.svg";
import { ReactComponent as Pin } from "../../images/pin-o.svg";
import { ReactComponent as Filter } from "../../images/o-filter.svg";
import { Autocomplete } from "@react-google-maps/api";
import Button from "../Button/Button";





function  Mapbar(){
    return(
        <>
        <div className="w-11/12 lg:h-full bg-white p-3 flex gap-5 lg:flex-row md:flex-col sm:flex-col sm:h-24">
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
          <Button
            text={"Zone Picker"}
            icon={<Filter className="w-3 h-2.5 fill-gray" />}
          />
          <Button
            text={"Plu Filter"}
            icon={<Filter className="w-3 h-2.5 fill-gray" />}
          />
          <Button
            text={"Prospect"}
            icon={<Filter className="w-3 h-2.5 fill-gray" />}
          />
          <Button
            text={"Zone Cases"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
          <Button
            text={"Listings"}
            icon={<Pin className="w-2.5 h-4 fill-gray" />}
          />
        </div>
      </div>
        </>
    )
}

export default Mapbar