import React from "react";
import Ligne from "./Ligne";

const Section = () => {
  const backgrounImage =
    " bg-[url(https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&w=1000)]";
  return (
    <div className="relative">
      <div
        className={`h-[700px] ${backgrounImage}  bg-no-repeat bg-center bg-cover`}
      >
        <div className="absolute bg-black top-0 left-0 right-0 bottom-0 opacity-70"></div>
        <div className="h-4/6 text-white brightness-110 flex justify-center w-11/12 md:w-7/12 mx-auto items-end">
          <div className="text-center ">
            <div className="text-lg md:text-2xl font-semibold lg:text-xl">
              Pas besoin de chercher loin
            </div>
            <div className="font-bold text-3xl text-center lg:text-4xl pt-3 gradiantText">
              UN COACH SPORTIF PROFESSIONNEL
            </div>
            <Ligne widths={"w-[200px] mx-auto my-6"} />
            <div className="text-center text-2xl font-normal lg:text-xl ">
              Faites appel à un coach <b>qualifié</b> qui se trouve à proximité
              de chez vous, et qui saura vous accompagner, quelles que soient
              vos <b>ambitions.</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
