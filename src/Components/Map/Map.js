// import { GoogleMap} from '@react-google-maps/api';
// import React, {useEffect, useState } from 'react'
import ReactMapGl , {NavigationControl} from "react-map-gl";
import { useState} from "react";

const MAPBOX_TOKEN = "pk.eyJ1IjoiaGFzbmF0dWxoYXEiLCJhIjoiY2wwdzBjb3JrMTc3ajNkbjUyaDljbG8zcyJ9.zR9o-L0WGPt1JKTHd0oUFg";


function Map(){

    const [viewport, setviewport] = useState({
        longitude: -95.712891,
        latitude: 37.09024,
        zoom: 4,
        width: window.innerWidth,
        height: window.innerHeight,
        isDragging: false,
      });


    return(
        <>
          <ReactMapGl
        width="100vw"
        height="100vh"
        style={{ borderTop: "5px solid #245c7c" }}
        mapStyle={"mapbox://styles/hasnatulhaq/cl1kc4e5o00my14o3kuifx4vp"}
        mapboxAccessToken={MAPBOX_TOKEN}
        {...viewport}
        onMove={(evt) => setviewport(evt.viewport)}
        // onClick={displaydata}
      >
        <NavigationControl/>
      </ReactMapGl>
        </>
    )

}

export default Map