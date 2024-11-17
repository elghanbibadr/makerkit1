import React from 'react'

const Label = ({children,labelfor}) => {
  return (
    <label className="text-[0.8rem]   font-semibold text-white dark:text-gray-400" htmlFor={labelfor}>
    {children}
  </label>
  )
}

export default Label