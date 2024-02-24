import React from 'react'
import Card from './Card'
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
const ScreenModeCard = () => {
  return (
    <Card>   
    <span className="font-semibold ml-3 "> Theme</span>
    <div className="flex my-2 items-center px-8 ">
      <img className="h-4 mr-2" src={sun} alt="sun icon" />
      <span className=" text-sm">light</span>
    </div>
    <div className="flex items-center px-8 ">
      <img className="h-4 mr-2" src={moon} alt="sun icon" />
      <span className=" text-sm">dark</span>
    </div>

    </Card>
  )
}

export default ScreenModeCard