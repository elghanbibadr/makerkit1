import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="w-[400px] shadow-pinkBoxShadow z-10 bg-[#030712] p-5 rounded-md">
      {children}
    </div>
  );
};

export default Modal;
