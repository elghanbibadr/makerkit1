import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
    <ColorRing
  visible={true}
  height="60"
  width="60"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#C8A2FF', 'white',"#C8A2FF","white","#C8A2FF","white"]}
  />
    </div>
  );
};

export default LoadingSpinner;