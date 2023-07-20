import React from "react";

const Services = () => {
  const menuTab = [
    {
      title: "Plan alimentaire adapté",
      description:
        "À partir d'un bilan complet, l'objectif sera d'établir un plan alimentaire optimisé en fonction de vos habitudes et de vos objectifs. L'important sera d'apprendre à bien adapter votre alimentation pour progresser.",
      image:
        "https://images.pexels.com/photos/1640768/pexels-photo-1640768.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Suivi de progression",
      description:
        "Il sera important d'évaluer votre progression durant tout votre accompagnement afin de s'assurer d'une évolution constante et optimale.",
      image:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Coach disponible 7J/7",
      description:
        "Profitez d'un coach disponible à tout moment pour répondre à vos questions, et vous accompagner pour atteindre vos objectifs.",
      image:
        "https://images.pexels.com/photos/177707/pexels-photo-177707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Séances avec le Coach",
      description:
        "Profitez de séances encadrées par votre coach sportif personnel diplômé. Ces séances seront essentielles pour votre progression, elles permettront à votre coach de corriger vos mouvements, d'évaluer votre niveau de pratique, d'adapter votre programme, de vous motiver et surtout, de vous faire vivre une super expérience.",
      image:
        "https://images.pexels.com/photos/6455791/pexels-photo-6455791.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="p-[3%]">
      <div className="container mx-auto grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuTab.map(({ title, description, image }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-80 rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 text-base">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
