"use client";
import React, { useEffect, useState } from "react";
import Mapping from "./Mapping";

const Geolocation = ({}) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError("Geolocation permission denied or unavailable.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const handleEnableGeolocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        setError("Geolocation permission denied or unavailable.");
      }
    );
  };

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  return (
    <div>
      <h1>Get User Geolocation</h1>
      {latitude && longitude ? (
        <p>
          Latitude: {latitude.toFixed(14)}, Longitude: {longitude.toFixed(14)}
        </p>
      ) : (
        <>
          <p>{error}</p>
          <button onClick={handleEnableGeolocation}>Enable Geolocation</button>
        </>
      )}
      <button onClick={handleEnableGeolocation}>click</button>
      {longitude && <Mapping position2={[latitude, longitude]} />}
    </div>
  );
};

export default Geolocation;
