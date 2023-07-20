import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Price = () => {
  const ceQueVousObtenez = [
    {
      title: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "400",
      items: [
        `Individual configuration`,
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {/* title */}
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {/*paragraph */}
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {ceQueVousObtenez.map(
            ({ title, description, items, price }, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {description}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      {price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      DHs/heurs
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {items.map((x, index) => {
                      return (
                        <li key={index} className="flex items-center space-x-3">
                          <BsCheck2 className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                          <span dangerouslySetInnerHTML={{ __html: x }}></span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    className=" hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Price;
