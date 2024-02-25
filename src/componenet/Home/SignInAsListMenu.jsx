import React from 'react'
import Card from '../../ui/Card'
import dashboardIcon from "../../assets/dashboardicon.svg"


const Item = ({ icon, text }) => {
    return (
      <div className="flex py-2 px-1 mt-2  border-t border-accent1 items-center cursor-pointer hover:bg-[#17182A]">
       {icon &&  <img className="h-5 mr-2" src={icon} alt={`${text} icon`} />}
        <span className="text-sm font-medium">{text}</span>
      </div>
    );
  };
  
const SignInAsListMenu = () => {
  return (
    <Card className="right-6  top-20 w-[210px]  m-0">
         <div className='w-full p-1  hover:bg-[#17182A]  cursor-pointer  '>
            <span className='text-[0.8rem] text-gray-600 font-medium '>Signed in as</span>
            <span className='block text-[0.8rem] font-medium'>bghanbi50@gmail.com</span>
         </div>

    <Item icon={dashboardIcon} text="Dashboard" />
    <Item icon={dashboardIcon} text="Dashboard" />
    <Item icon={dashboardIcon} text="Dashboard" />
    </Card>

  )
}

export default SignInAsListMenu