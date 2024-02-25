import React, { useContext } from 'react'
import Card from '../../ui/Card'
import dashboardIcon from "../../assets/dashboardicon.svg"
import { AppContext } from '../../store/AppContext';
import signouticon from "../../assets/signouticon.svg"
import { logout } from '../../services/apiAuth';

const Item = ({ icon, text ,onClick}) => {




    return (
      <div onClick={onClick} className="flex py-2 px-1 mt-2  border-t border-accent1 items-center cursor-pointer hover:bg-[#17182A]">
       {icon &&  <img className="h-5 mr-2" src={icon} alt={`${text} icon`} />}
        <span className="text-sm font-medium">{text}</span>
      </div>
    );
  };
  
const SignInAsListMenu = () => {
    const {session}=useContext(AppContext)

    

    console.log("session",session)
  return (
    <Card className="right-6  top-20 w-[210px]  m-0">
         <div className='w-full p-1  hover:bg-[#17182A]  cursor-pointer  '>
            <span className='text-[0.8rem] text-gray-600 font-medium '>Signed in as</span>
            <span className='block text-[0.8rem] font-medium'>{session?.user?.email}</span>
         </div>

    <Item icon={dashboardIcon} text="Dashboard" />
    <Item icon={dashboardIcon} text="Dashboard" />
    <Item icon={dashboardIcon} text="Dashboard" />
    <Item onClick={logout} icon={signouticon} text="Sign out" />
    </Card>

  )
}

export default SignInAsListMenu