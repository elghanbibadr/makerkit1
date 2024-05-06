

import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
// import { useInviteAccepted } from '../../hook/useInviteAccepted';
import { handleInviteAccepted } from '../../services/apiMembre';

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
    <div>
        <h1>Invite accepted :{email}</h1>
    </div>
  )
}

export default InviteAcceptedPage