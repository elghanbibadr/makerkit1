import React from 'react'
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Logo = ({className}) => {
  return (
    // <div className={`w-[80%] lg:w-auto  ${className}`}>
    <Link to="/">
      <img  className={className} src={logo} alt="malerkit logo" />
    </Link>
  // </div>
  )
}

export default Logo