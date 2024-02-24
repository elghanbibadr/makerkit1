import React from 'react'
import Card from './Card'
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
const ScreenModeCard = () => {
  return (
    <Card>   
    <div className='pl-2 w-[114px]'>
        <span className="font-semibold "> Theme</span>
        <div className="flex my-2 items-center  cursor-pointer   hover:bg-[#17182A] rounded-md p-1 ">
          <img className="h-4 mr-2" src={sun} alt="sun icon" />
          <span className=" text-sm">light</span>
        </div>
        <div className="flex items-center  cursor-pointer hover:bg-[#17182A] rounded-md p-1  ">
          <img className="h-4 mr-2" src={moon} alt="sun icon" />
          <span className=" text-sm">dark</span>
        </div>
    </div>

    </Card>
  )
}

export default ScreenModeCard