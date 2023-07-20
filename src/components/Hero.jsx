import React from "react";
import Ligne from "./Ligne";

const Hero = () => {
  return (
    <div>
      <div className="h-auto bg-[#1d1d1f]">
        <div>
          {/* ton coach sportif personnel */}
          <div className="py-6 pt-24 flex flex-col justify-center text-white items-center">
            <div className="" style={{ textShadow: "0 0 30px #fff3" }}>
              <div className="text-xl font-normal md:text-2xl uppercase">
                ton
              </div>
              <div className="text-4xl font-bold whitespace-nowrap halo md:text-6xl 2xl:text-7xl uppercase">
                Coach sportif
                <Ligne widths={"w-[220px]"} />
              </div>
              <div className="text-5xl font-bold halo md:text-6xl 2xl:text-7xl">
                Personel
              </div>
            </div>
          </div>
          {/* "La meilleure option pour atteindre tes OBJECTIFS"*/}
          <div className="py-12 flex justify-center">
            <span className="text-2xl text-center text-white font-extralight">
              Atteins tes
              <span className="font-extrabold gradiantText "> OBJECTIFS </span>
              avec la solution ultime.
            </span>
          </div>
          {/* button */}
          <div className="w-full flex justify-center  py-12">
            <button className="btn btn-active  border-none text-4xl p-5 h-auto w-auto  bg-gradient-to-r from-cyan-500 to-blue-500">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
