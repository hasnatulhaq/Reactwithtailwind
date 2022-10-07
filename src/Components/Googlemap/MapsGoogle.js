// import { GoogleMap, useJsApiLoader , Marker} from '@react-google-maps/api';
// import React, {useState } from 'react'
// import './MapsGoogle'
// // import axios from 'axios'


// const containerStyle = {
//     width: '100wh',
//     height: '86.3vh',
//   };


// function MapsGoogle(){

//   const [map, setMap] = useState(null);
//   // const [autocomplete, setAutocomplete] = useState(null)
//   // const [lat , setLat] = useState(40.750183)
//   // const [lng , setLng]  = useState(-73.983759)
//    const lng = -73.983759
//    const lat = 40.750183

//   const center = {
//     lat,
//     lng,
//   };

//   const position={
//        lat : lat,
//        lng : lng,
//   }

//   console.log(map);

// //   useEffect(()=>{
// //     async function getData(){
// //       try{
// //        const res=await axios.get('https://testing-api.zoneomics.com/cities/findByLatLng?lat='+lat+'&lng='+lng, )
// //     //  if(res?.data?.data)
// //              console.log(res.data , " cities data")
// //              SetData(res.data)
// //              SetZone(res.data.data.zoneCode);
// //              SetCityId(res.data.data.id);
// //       }catch(error){
// //            console.log("Not found any zone data",error);
// //       }
// //     }
// //     getData()
// // },[lat,lng]);


//     // const onRendered = marker => {
//     //     console.log('marker: ', marker)
//     //   }

//       const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "YOUR_API_KEY"
//       })
//        console.log(isLoaded)
//       // const onPlaceChanged = ()=>{
//       //   var places = autocomplete.getPlace()
//       //   setLat(places.geometry.location.lat())
//       //   setLng(places.geometry.location.lng())
//       // }
    
//       const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);
//         setMap(map)
//       }, [center])
    
//       const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//       }, [])

//     return(
//         <>
//       <div>
//         {/* <Autocomplete
//       onLoad={(e)=>setAutocomplete(e)}
//        onPlaceChanged={onPlaceChanged}
//        restrictions={{country: "us"}}>
//         <input id='place-id' type='text'/>
//       </Autocomplete> */}
//         </div>
//           <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     > 
//       <Marker 
//       // onLoad={onRendered}
//        position={position}
//       ></Marker>
//     </GoogleMap>
//         </>
//     )

// }

// export default MapsGoogle