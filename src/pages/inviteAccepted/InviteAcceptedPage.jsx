

import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
// import { useInviteAccepted } from '../../hook/useInviteAccepted';
import { handleInviteAccepted } from '../../services/apiMembre';
import CtaCard from '../../componenet/Home/CtaCard';
import Button from '../../ui/Button';

const InviteAcceptedPage = () => {
    const [searchParams] = useSearchParams();
    
    const email  = searchParams.get('email')
    

    // const {updateInviteStatus}=useInviteAccepted();


 
    useEffect(()=>{
      if(email){
        return () => handleInviteAccepted(email)
      }
    },[email])

  

  return (
    <div className='h-[44vh] mt-10 flex flex-col justify-center items-center'>
    <CtaCard className="py-6 mt-10 flex justify-center items-center rounded-lg">Invite accepted Successfully 🎉</CtaCard>
    <Button className='button-transparent  border-none rounded-md py-1  text-white'>
        <Link className='flex' to="/dashboard/settings/organization/members">
            <span className='text-xs  inline-block font-normal'>Manage Members </span>
            <svg className='rotate-180 ml-2 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>
        </Link>
    </Button>
</div>
  )
}

export default InviteAcceptedPage