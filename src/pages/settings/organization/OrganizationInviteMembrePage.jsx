import React from 'react'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import { useState } from 'react'
import { useInviteMembre } from '../../../hook/useInviteMembre'

const OrganizationInviteMembrePage = () => {
  const [memberEmail,setOrgEmail]=useState('')
  const [memberRole,setMembreRole]=useState('membre')
 const { inviteMembre, isLoading:isInvitingMember }=useInviteMembre()

  function inviteMembreHandler(e){
   e.preventDefault()
   console.log("submited")
  //  getting the membre information
  const invitedMembre={
    memberRole,
    memberEmail,
    orgId:"1a52b845-58b1-4e08-a0cd-590cf886e11c"
  }
  console.log(invitedMembre)
  inviteMembre(invitedMembre)
  }
  return (
    <div>
    <div className="text-white">
      <h3>Invite Members</h3>
      <p className="text-gray-400 text-sm md:text-base font-normal">
      Invite members to your organization
      </p>
    </div>
    <form onSubmit={inviteMembreHandler} className="my-7">
      <div className="sm:flex  gap-2 ">
      <Input  value={memberEmail} onChange={(e)=>setOrgEmail(e.target.value)} type='email' placeholder="membre@email.com" required/>
      <select  id="" className="h-fit relative top-4" value={memberRole} onChange={(e)=> setMembreRole(e.target.value)}>
          <option value="member">member</option>
          <option value="admin">admin</option>
        </select>
    
      </div>
       <Button type="submit" className="bg-darkPink py-2 text-nowrap 	 w-full sm:w-[20%]  text-white rounded-md"
        >
          { !isInvitingMember && <span>Send invite</span>}
         {isInvitingMember &&  <span>Inviting ...</span>}

        </Button>
    </form>
  </div>
  )
}

export default OrganizationInviteMembrePage