import React from 'react'
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="w-[80%] lg:w-auto">
    <Link to="/">
      <img src={logo} alt="malerkit logo" />
    </Link>
  </div>
  )
}

export default Logo