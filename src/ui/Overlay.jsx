import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="bg-[#030712d8] z-10 flex justify-center items-center absolute  inset-0 h-[100vh] w-[100vw]">
      {children}
    </div>
  );
};

export default Overlay;
