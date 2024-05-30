import React from 'react';

export const ButtonTransparent = ({ text,children, icon, alt, onClick, className }) => {
  return (


      <button
        onClick={onClick}
        className={`border-accent1 text-nowrap  border flex justify-center gap-1 items-center rounded-md hover:bg-accent1  ${className}`}
      >
        {children}
        <span>{text}</span>
        {icon && <img className='h-4' src={icon} alt={alt} />}
      </button>
    );
};
