import React from 'react'

export const ButtonTransparent = ({text,icon,iconalt}) => {
  return (
    <button className='border-accent1  hover:bg-accent1 hover:text-white  '>
    <span>{text}</span>
    {icon && <img src={icon} alt={iconalt} />}
    </button>
  )
}
