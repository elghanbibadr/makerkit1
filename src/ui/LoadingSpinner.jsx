import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const LoadingSpinner = ({className}) => {
  return (
    <div className={` flex justify-center h-screen items-center  ${className}`}>
    <ColorRing
  visible={true}
  height="60"
  width="60"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#C8A2FF', 'white',"#C8A2FF","white","#C8A2FF","white"]}
  // colors={['white', 'white',"white","white","white","white"]}
  />
    </div>
  );
};

export default LoadingSpinner;