import React from 'react';

export const ButtonTransparent = ({ text, icon, alt, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border-accent1 flex justify-center gap-2 items-center rounded-md hover:bg-accent1 hover:text-white ${className}`}
    >
      {icon && <img className='h-4' src={icon} alt={alt} />}
      <span>{text}</span>
    </button>
  );
};
