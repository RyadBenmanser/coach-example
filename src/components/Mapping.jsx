"use client";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import Geolocation from "./Geolocation";
import { FaMapMarkerAlt } from "react-icons/fa";
import L from "leaflet"; // Import Leaflet to create custom icons
import {
  Circle,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import Link from "next/link";
function toRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function calcCrow(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const radLat1 = toRad(lat1);
  const radLat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(radLat1) *
      Math.cos(radLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  // Automatically determine the appropriate unit based on the magnitude of distance
  if (d < 1) {
    return d * 1000; // Return distance in meters
  } else {
    return d; // Return distance in kilometers
  }
}

const Mapping = ({ position2 }) => {
  const customIcon2 = L.icon({
    iconUrl: "me.png", // Replace with the URL to your custom icon image
    iconSize: [25, 34], // Replace with the desired icon size
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const position1 = [33.95342573693545, -6.8238036938454645];
  const center = [33.95342573693545, -6.8238036938454645];
  const limeOptions = { color: "black" };
  const polyline = [
    [position2[0], position2[1]],
    [33.95342573693545, -6.8238036938454645],
    [33.95342573693545, -6.82380369384546452],
  ];
  const distance = calcCrow(
    position1[0],
    position1[1],
    position2[0],
    position2[1]
  ).toFixed(2);

  return (
    <div>
      <MapContainer
        center={center}
        scrollWheelZoom={false}
        zoom={13}
        style={{ width: "75%", height: "500px", margin: "0 auto" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position1}>
          <Popup>
            <Link
              href={
                "https://www.google.com/maps/place/Ecole+Blaise+Pascal/@33.9532878,-6.8264537,17z/data=!3m1!4b1!4m6!3m5!1s0xda714b007a30ce7:0xf7e2cb27ca971b88!8m2!3d33.9532834!4d-6.8238788!16s%2Fg%2F1tj1nwjk?entry=ttu"
              }
            >
              Ouvrir sur google map
            </Link>
          </Popup>
        </Marker>
        {position2[0] && (
          <Marker position={position2} icon={customIcon2}>
            <Popup>Customized Marker Popup</Popup>
          </Marker>
        )}
        <Circle center={center} fillColor="blue" radius={500}>
          <Popup>
            <Link
              href={
                "https://www.google.com/maps/place/Ecole+Blaise+Pascal/@33.9532878,-6.8264537,17z/data=!3m1!4b1!4m6!3m5!1s0xda714b007a30ce7:0xf7e2cb27ca971b88!8m2!3d33.9532834!4d-6.8238788!16s%2Fg%2F1tj1nwjk?entry=ttu"
              }
            >
              Ouvrir sur google map
            </Link>
          </Popup>
        </Circle>
        {position2[0] && (
          <Polyline pathOptions={limeOptions} positions={polyline}>
            <Tooltip>{distance + (distance < 1 ? " meters" : " km")}</Tooltip>
          </Polyline>
        )}
      </MapContainer>
    </div>
  );
};

export default Mapping;
