import React from "react";
import Ligne from "../Ligne";
import { AiFillHome } from "react-icons/ai";
import { BsTree } from "react-icons/bs";
import { LuSmartphone } from "react-icons/lu";

const ImageBackground = () => {
  const backgroundImage =
    "bg-[url('https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=1')]";
  const menuTab = [
    {
      icon: <AiFillHome className="fill-cyan-600" />,
      description: `Pratique chez toi avec une motivation authentique ! Ton coach viendra chez toi pour te guider lors de séances efficaces, équipé du matériel nécessaire pour t'aider à dépasser tes objectifs.`,
      title: "À DOMICILE",
    },
    {
      icon: <BsTree className="fill-green-700" />,
      description: `Bénéficie d'un entraînement en plein air, offrant une opportunité de sortir de chez toi et de disposer de tout l'espace nécessaire pour ta progression ! Ton coach sportif sera à tes côtés pour t'accompagner tout au long de tes séances.`,
      title: "EN EXTÉRIEUR",
    },
    {
      icon: <LuSmartphone />,
      description: `Prends en main enfin le programme qui te convient. Le coaching à distance résoudra tous les problèmes que tu rencontres dans ta progression, t'aidant à atteindre plus rapidement que jamais tes objectifs.`,
      title: "EN LIGNE",
    },
  ];
  return (
    <div>
      {" "}
      <div className="h-auto relative">
        <div
          className={`${backgroundImage} bg-fixed h-full bg-cover bg-center bg-no-repeat`}
        >
          <div className="  bg-black opacity-70 absolute h-full w-full "></div>
          <div className="  brightness-150 h-full mx-auto w-full">
            <div className=" px-4 sm:px-2 sm:w-9/12 md:w-1/2 mx-auto h-full text-white">
              {/* ------------------------ */}
              <div className="text-center ">
                <div className="text-2xl pt-12">Restez motivé</div>
                <div className="text-4xl py-12 gradiantText font-semibold">
                  DES ENTRAÎNEMENTS SELON VOS PRÉFÉRENCES
                </div>
              </div>
              <Ligne widths={"w-[200px] mx-auto"} />
              {/* ---------------------------- */}
              <div className="py-12 pb-24">
                {menuTab.map(({ icon, description, title }, index) => {
                  return (
                    <div key={index} className="flex gap-4 py-4">
                      <div className="text-5xl">{icon} </div>
                      <div className="border-l-2 px-2">
                        <p className="text-2xl">{title}</p>
                        <p className="text-lg">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;
