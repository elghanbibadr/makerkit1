import React from 'react';
import { ButtonTransparent } from './Button-transparent';
import arrow from "../assets/arrow2.svg"


const WhatWeProvideDesc = ({ id,title, subtitle, description }) => {
  console.log("key",id)
  return (
    // className={`${id===1 ? "col-start-2 col-end-3 ":"" }`}
    <div className={`${id===1 ? "col-start-2 col-end-3  row-start-2 row-end-2 ":"" }`} > 
      <h2 className="text-white">{title}</h2>
      <h3 className="gradient-text my-4">{subtitle}</h3>
      <p className="text-white my-4">{description}</p>
      <ButtonTransparent className="rounded-full"  text="get started" alt="arrow " icon={arrow}  />
  
    </div>
  );
};

export default WhatWeProvideDesc;
