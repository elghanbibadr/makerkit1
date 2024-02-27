import React from 'react'

const Input = ({id,className,...rest}) => {
  return (
    <input
    className={`px-4 py-3 mt-2 rounded-md mb-6 bg-transparent block w-full focus:border-darkPink text-gray-500 font-medium text-sm  border  focus:outline-none  border-accent1 ${className}`}
    id={id}  
    {...rest}
  /> 

  )
}

export default Input