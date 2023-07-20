import React from "react";

const Ligne = ({ widths }) => {
  return (
    <div
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 h-[3px] ${widths}`}
    ></div>
  );
};

export default Ligne;
