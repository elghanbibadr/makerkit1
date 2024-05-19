import React from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

export const PurpleButton = ({ isLoading, text, className ,onClick,...rest }) => {

  return (
    <button onClick={onClick}
     className={`bg-darkPink justify-center my-3 flex gap-1 items-center rounded-md  hover:bg-darkPink/90 ${className}`}
     {...rest}
     >
      {isLoading && <LoadingSpinner className='h-1' width='26' height='26' />}
      <span>{text}</span>
    </button>
  );
};
