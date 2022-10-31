import { GoogleMap, useJsApiLoader , Marker} from '@react-google-maps/api';
import React, {useState , useEffect } from 'react'
import './MapsGoogle'
import axios from 'axios'
import Mapbar from '../Mapbar/Mapbar';
import { MVTLayer , TextLayer} from "deck.gl";
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import Legend from '../Legend/Legend';


const containerStyle = {
    width: '100wh',
    height: '86.3vh',
  };


function MapsGoogle(){

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null)
  const [lat , setLat] = useState(40.750183)
  const [lng , setLng]  = useState(-73.983759)
  const [zone, SetZone] = useState([]);
  const [Cityid ,SetCityId] = useState();
  const [data, SetData] = useState([]);

  const center = {
    lat,
    lng,
  };

  const position={
       lat : lat,
       lng : lng,
  }
  console.log(map);
  useEffect(()=>{
    async function getData(){
      try{
       const res=await axios.get('https://testing-api.zoneomics.com/cities/findByLatLng?lat='+lat+'&lng='+lng, )
    //  if(res?.data?.data)
             console.log(res.data , " cities data")
             SetData(res.data)
             SetZone(res.data.data.zoneCode);
             SetCityId(res.data.data.id);
      }catch(error){
           console.log("Not found any zone data",error);
      }
    }
    getData()
},[lat,lng]);



let zones = [];
const getZoneBasedColor = (zone_code) => {
  const randomBetween = (min = 0, max = 255) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween();
  const g = randomBetween();
  const b = randomBetween();
  const index = zones.find((zone) => zone.code === zone_code);
  if (index) {
    return index.color;
  } else {
    const color = [r, g, b, 255];
    zones.push({ code: zone_code, color: color });
    return color;
  }
};
 


const deckOverlay = new GoogleMapsOverlay({
  layers: [
    new MVTLayer({
      id : "mvtlayer",
      data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=${Cityid}`,
      minZoom: 10,
      maxZoom: 23,
      getLineColor: [19, 18 , 192],
      getFillColor: (f, g) => {
        return getZoneBasedColor(f.properties.z);
      },
      getLineWidth: 1,
      opacity: 0.2,
    }),

     new TextLayer({
        id: 'text-layer',
        data,
        pickable: true,
        getPosition: d => d.position,
        getText: d => d.zone,
        getSize: 16,
        getAngle: 0,
        getTextAnchor: 'middle',
        getAlignmentBaseline: 'center'
      })
  ]
}); 

deckOverlay.setMap(map)


    const onRendered = marker => {
        console.log('marker: ', marker)
      }

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
      })
       console.log(isLoaded)
      const onPlaceChanged = ()=>{
        var places = autocomplete.getPlace()
        setLat(places.geometry.location.lat())
        setLng(places.geometry.location.lng())
      }
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [center])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

    return(
        <>
          <Mapbar onPlaceChanged={onPlaceChanged} setAutocomplete={setAutocomplete} zone={zone}/>
          <Legend zone={zone} getZoneBasedColor={getZoneBasedColor}/>
          <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    > 
      <Marker 
      onLoad={onRendered}
       position={position}
      ></Marker>
    </GoogleMap>
        </>
    )
}

export default MapsGoogle







 {/* <div>
        <Autocomplete
      onLoad={(e)=>setAutocomplete(e)}
       onPlaceChanged={onPlaceChanged}
       restrictions={{country: "us"}}>
        <input id='place-id' type='text'/>
      </Autocomplete> 
        </div> */}


