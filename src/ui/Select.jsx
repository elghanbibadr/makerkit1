import React from 'react'

const Select = ({name,onChange,value}) => {
  return (
    <select
    name={name}
    className=" text-gray-400 focus:outline-none   border py-0 border-accent1 outline-none  bg-secondary select "
    value={value}
    onChange={onChange}
  >
    <option value="member">member</option>
    <option value="admin">admin</option>
  </select>
  )
}

export default Select