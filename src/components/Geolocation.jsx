"use client";
import React, { useEffect, useState } from "react";
import Mapping from "./Mapping";
import Link from "next/link";

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
          setError(
            "Activer la geolocalisation pour savoir la distance qui vous separe de votre coach"
          );
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  return (
    <div>
      <h1 className="text-2xl w-9/12 mx-auto text-center my-4">
        <Link href={""} className="btn">
          Votre coach sur google Map{" "}
        </Link>
      </h1>
      {latitude && longitude ? (
        <p></p>
      ) : (
        <>
          <p className="text-center w-9/12 mx-auto my-4">{error}</p>
        </>
      )}
      {<Mapping position2={[latitude, longitude]} />}
    </div>
  );
};

export default Geolocation;
