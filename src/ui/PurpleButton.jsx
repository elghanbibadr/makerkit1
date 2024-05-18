import React from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

export const PurpleButton = ({ isLoading, text, className }) => {

  return (
    <button className={`bg-darkPink justify-center my-3 flex gap-1 items-center rounded-md h-10 hover:bg-darkPink/90 capitalize ${className}`}>
      {isLoading && <LoadingSpinner className='h-1' width='26' height='26' />}
      <span>{text}</span>
    </button>
  );
};
