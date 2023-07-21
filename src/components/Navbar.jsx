"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdModeStandby } from "react-icons/md";

const Navbar = () => {
  const [currentId, setCurrentId] = useState("");
  const router = useRouter();
  const menu = [
    { name: "Home", url: "#home" },
    { name: "Services", url: "#services" },
    { name: "Map", url: "#map" },
    { name: "Tarif", url: "#price" },
    { name: "Contact", url: "#contact" },
  ];
  useEffect(() => {
    // Do something with the hash value
    const handleScroll = () => {
      const ids = document.querySelectorAll("div");
      let currentId = "";

      let currentOfsset = Infinity;

      ids.forEach((id) => {
        let { top, height } = id.getBoundingClientRect();
        top = top + height - 10;
        if (top >= 0 && top <= currentOfsset) {
          currentId = id.id;
          currentOfsset = top;
        }
      });
      setCurrentId(currentId);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="ml-0 fixed z-10">
      <ul className="list-disc flex flex-col gap-5 fixed right-0 top-0 bottom-0 justify-center sm:m-10 m-3 ">
        {menu.map((x, index) => {
          return (
            <a
              href={x.url}
              key={index}
              className="flex items-center flex-row-reverse group "
            >
              <MdModeStandby className="sm:text-4 xl text-2xl text-primary group-hover:text-accent  transition-all ease-in-out duration-700  sm:ml-5  flex-shrink-0" />
              <p
                className={`opacity-0 group-hover:opacity-100 transition duration-700  text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold uppercase`}
              >
                {x.name}
              </p>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
