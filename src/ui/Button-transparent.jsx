import React from 'react';

export const ButtonTransparent = ({ text,children, icon, alt, onClick, className }) => {
  return (


      <button
        onClick={onClick}
        className={`border-accent1 border flex justify-center gap-2 items-center rounded-md hover:bg-accent1 hover:text-white ${className}`}
      >
        {children}
        <span>{text}</span>
        {icon && <img className='h-4' src={icon} alt={alt} />}
      </button>
    );
};
