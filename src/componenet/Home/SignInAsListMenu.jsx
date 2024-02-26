import React, { useContext } from 'react'
import Card from '../../ui/Card'
import dashboardIcon from "../../assets/dashboardicon.svg"
import { AppContext } from '../../store/AppContext';
import signouticon from "../../assets/signouticon.svg"
import { useLogout } from '../../hook/useLogout';
import LoadingSpinner from '../../ui/LoadingSpinner';
import themIcon from "../../assets/themeIcon.svg"
import { Link } from 'react-router-dom';
import documentationIcon from "../../assets/documentationIcon.svg"


const Item = ({ icon, text ,onClick}) => {
    return (
      <div onClick={onClick} className="flex py-3 px-2   border-t border-accent1 items-center cursor-pointer hover:bg-[#17182A]">
       {icon &&  <img className="h-5 mr-2" src={icon} alt={`${text} icon`} />}
        <span className="text-sm font-medium">{text}</span>
      </div>
    );
  };
  
const SignInAsListMenu = ({position}) => {
    const {session}=useContext(AppContext)
    const { logout,isLoading=true} = useLogout() 



  return (
    <Card  className={`${position} w-[210px] py-0 p-0  m-0`}
    >
         <div className='w-full px-2 py-3   hover:bg-[#17182A]  cursor-pointer  '>
            <span className='text-[0.8rem] text-gray-600 font-medium '>Signed in as</span>
            <span className='block text-[0.8rem] font-medium'>{session?.user?.email}</span>
         </div>

    <Link to="/dashboard">
      <Item icon={dashboardIcon} text="Dashboard" />
    </Link>
    <Item icon={themIcon} text="Theme" />
    <Item icon={documentationIcon} text="Documentation" />
   { !isLoading && <Item onClick={logout} icon={signouticon} text="Sign out" />}
    {isLoading && <LoadingSpinner className="h-8 w-8 mx-auto   "/>}
   

    </Card>

  )
}

export default SignInAsListMenu