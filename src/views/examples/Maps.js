import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "reactstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import L from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import { useDispatch, useSelector } from "react-redux";
import { fetchPointBin } from "Redux/actions/BinAction";
import { fetchBin } from "Redux/actions/BinAction";

const LeafletMap = () => {
  // Rest of the code...
};

const Maps = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const position = [51.505, -0.09];
 
  let DefaultIcon = L.icon({
    iconUrl: require("../../assets/img/brand/marker-icon.png"),
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
    className: "my-custom-class"
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const allBins = useSelector(state => state?.allBins?.Bins_list?.bins);
  const allPointBins = useSelector(state => state?.AllPointBins?.PointBins);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPointBin())
    
  }, [allPointBins])
  useEffect(() => {
    dispatch(fetchBin())
  }, [allBins])
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation([latitude, longitude]);
    });
  }, []);

  const MapsMarker = () => {
    const [position1, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    useEffect(() => {
      if (currentLocation) {
        map.flyTo(currentLocation, map.getZoom());
      }
    }, [currentLocation]);
    return position1 === null ? null : (
      <Marker position={position1}
      // icon={}
      >
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <>
      {/* Your other code */}
      <MapContainer center={currentLocation || position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allBins &&
          allBins.map(bin => (
            <Marker
              key={bin._id}
              position={[51.505, 51.505]} // Update property names
            >
            <Popup>
    <div dangerouslySetInnerHTML={{
      __html: `
        <style>
          .half-arc {
            position: relative;
            width: 100px;
            height: 50px;
            border-top-left-radius: 120px;
            border-top-right-radius: 120px;
            border-bottom: 0;
            background: #d9d9d9;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .half-arc:before {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            border-radius: 50%;
            background-image: conic-gradient(#9c27b0, #3f51b5 calc(var(--percentage, 0) / 2), #bbb 0);
            transition: transform .5s ease-in-out;
            z-index: 1;
            transform: rotate(270deg);
          }
          
          .half-arc:after {
            content: "";
            position: absolute;
            display: block;
            background: #dddddd;
            z-index: 2;
            width: calc(100% - 32px);
            height: calc(200% - 32px);
            border-radius: 50%;
            top: 16px;
            left: 16px;
          }
          
          .half-arc span {
            color: #673ab7;
            z-index: 3;
            text-align: center;
          }
          
          .half-arc div {
            flex: auto;
            display: flex;
            flex-direction: column;
            padding-top: 15%;
          }
        </style>
        <body>
          ${bin? `
          <div class="half-arc" style="--percentage: ${bin.niv}%">
            <div>
              <span class="label">${bin.niv}%</span>
              <span>${bin.type}</span>
            </div>
          </div>` : ''}
         
        </body>
      `
    }}></div>
  </Popup>
           
            </Marker>
          ))}
        {allPointBins &&
          allPointBins.map(pointBin => (
            <Marker
              key={pointBin._id}
              position={[pointBin.lat, pointBin.long]} // Update property names
            >
               <Popup>
    <div dangerouslySetInnerHTML={{
      __html: `
        <style>
          .half-arc {
            position: relative;
            width: 100px;
            height: 50px;
            border-top-left-radius: 120px;
            border-top-right-radius: 120px;
            border-bottom: 0;
            background: #d9d9d9;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .half-arc:before {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            border-radius: 50%;
            background-image: conic-gradient(#9c27b0, #3f51b5 calc(var(--percentage, 0) / 2), #bbb 0);
            transition: transform .5s ease-in-out;
            z-index: 1;
            transform: rotate(270deg);
          }
          
          .half-arc:after {
            content: "";
            position: absolute;
            display: block;
            background: #dddddd;
            z-index: 2;
            width: calc(100% - 32px);
            height: calc(200% - 32px);
            border-radius: 50%;
            top: 16px;
            left: 16px;
          }
          
          .half-arc span {
            color: #673ab7;
            z-index: 3;
            text-align: center;
          }
          
          .half-arc div {
            flex: auto;
            display: flex;
            flex-direction: column;
            padding-top: 15%;
          }
        </style>
        <body>
          ${pointBin.bins[0] ? `
          <div class="half-arc" style="--percentage: ${pointBin.bins[0].niv}%">
            <div>
              <span class="label">${pointBin.bins[0].niv}%</span>
              <span>${pointBin.bins[0].type}</span>
            </div>
          </div>` : ''}
          ${pointBin.bins[1] ? `
          <div class="half-arc" style="--percentage: ${pointBin.bins[1].niv}%">
            <div>
              <span class="label">${pointBin.bins[1].niv}%</span>
              <span>${pointBin.bins[1].type}</span>
            </div>
          </div>` : ''}
          ${pointBin.bins[2] ? `
          <div class="half-arc" style="--percentage: ${pointBin.bins[2].niv}%">
            <div>
              <span class="label">${pointBin.bins[2].niv}%</span>
              <span>${pointBin.bins[2].type}</span>
            </div>
          </div>` : ''}
          ${pointBin.bins[3] ? `
          <div class="half-arc" style="--percentage: ${pointBin.bins[3].niv}%">
            <div>
              <span class="label">${pointBin.bins[3].niv}%</span>
              <span>${pointBin.bins[3].type}</span>
            </div>
          </div>` : ''}
        </body>
      `
    }}></div>
  </Popup>
            </Marker>
          ))}
        {currentLocation && (
          <Marker position={currentLocation}>
            <Popup>Your current location</Popup>
          </Marker>
        )}
        <MapsMarker /> {/* New component to handle map events */}
      </MapContainer>
      {/* Your other code */}
    </>
  );
};

export default Maps;
