import React from "react";
import Ligne from "../Ligne";
import { BsCheck2Circle } from "react-icons/bs";

const ColorBackground = () => {
  const ImportantWordStyle =
    "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase";
  const menuTab = [
    {
      description: `<span class="${ImportantWordStyle}">Professionnel</span> qualifié en matière de perte de poids, renforcement musculaire et amélioration des performances physiques`,
    },
    {
      description: ` 
      <span class="${ImportantWordStyle}">Plus de 7 années</span> d'expérience et de pratique.`,
    },
    {
      description: ` Titulaire d'un <span class="${ImportantWordStyle}">diplôme de MASTER</span> en Sciences et Techniques des Activités Physiques et Sportives.`,
    },
    {
      description: `Expert dans le domaine du <span class="${ImportantWordStyle}">sport adapté à la santé et au handicap</span>.`,
    },
  ];
  return (
    <div>
      {" "}
      <div className="h-auto bg-[#1d1d1f]">
        <div className=" px-4 sm:px-2 sm:w-9/12 md:w-1/2 mx-auto h-full text-white">
          {/* ------------------------ */}
          <div className="text-center ">
            <div className="text-2xl pt-12">
              Un coach sportif diplômé et expérimenté
            </div>
            <div
              className={`text-4xl py-3  font-semibold ${ImportantWordStyle}`}
            >
              UNE PERSONNE DÉDIÉE À VOS OBJECTIFS
            </div>
          </div>
          <Ligne widths={"w-[200px] mx-auto mt-12"} />
          {/* ---------------------------- */}
          <div className="py-12 pb-24">
            {menuTab.map(({ description }, index) => {
              return (
                <div key={index} className="flex items-center gap-4 py-4">
                  <div className="text-5xl ">
                    <BsCheck2Circle className="fill-green-500 " />{" "}
                  </div>
                  <div className="border-l-2 px-2 text-2xl">
                    <span
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></span>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBackground;
