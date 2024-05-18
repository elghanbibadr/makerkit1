import React from 'react';
import Button from './Button';

const WhatWeProvideDesc = ({ title, subtitle, description }) => {
  return (
    <div>
      <h2 className="text-white">{title}</h2>
      <h3 className="gradient-text my-4">{subtitle}</h3>
      <p className="text-white my-4">{description}</p>
      <Button className="text-white button-transparent rounded-full" withArrow={true}>
        <span>get started</span>
      </Button>
    </div>
  );
};

export default WhatWeProvideDesc;
