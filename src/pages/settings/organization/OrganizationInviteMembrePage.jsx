import React, { useRef } from 'react'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import { useState } from 'react'
import { useInviteMembre } from '../../../hook/useInviteMembre'
import arrow from '../../../assets/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'
import { useGetMembres } from '../../../hook/useGetMembre'
import { useUser } from '../../../hook/useUser'


const OrganizationInviteMembrePage = () => {
  const [memberEmail,setMembreEmail]=useState('')
  const [memberRole,setMembreRole]=useState('membre')
  const  {isLoading:isGettingUser,user,isAuthenticated}=useUser()
  const {orgMembres,isLoading:isGettingOrgMembers}=useGetMembres(user?.data.user.id || "")
 const { inviteMembre, isLoading:isInvitingMember }=useInviteMembre(true)
 const userEmail=user?.data.user.email

 const navigate = useNavigate();

  const form=useRef()

  function inviteMembreHandler(e){
   e.preventDefault()
   console.log("submited")
  //  getting the membre information
  const invitedMembre={
    memberRole,
    memberEmail,
    orgId:user?.data.user.id,
  }
  

  if(isGettingOrgMembers) return 
   if(orgMembres.orgMembers.some(item => item.memberEmail===invitedMembre.memberEmail) ||  invitedMembre.memberEmail===userEmail){
      return toast.error('invite already exist !')
      
   }


  inviteMembre(invitedMembre)

  // Sending email to invited members

  console.log('form current',form.current)
  emailjs
  .sendForm('service_klj723p', 'template_uw0pu1c',form.current, {
    publicKey: 'IglxKjApNUagHGcdh',

  })
  .then(
    () => {
      console.log('SUCCESS!');

      setMembreEmail('')
    },
    (error) => {
     
      console.log('error',error)
      toast.error('there was an error sending email to this membre')
      
    },
  )
  }



  return (
    <div>
    <div className="text-white">
      <h3>Invite Members</h3>
      <p className="text-gray-400 text-sm md:text-base font-normal">
      Invite members to your organization
      </p>
    </div>
    {/* ref={form} */}
    <form ref={form} onSubmit={inviteMembreHandler} className="my-7">
      <div className="sm:flex  gap-2 ">
      <Input name='memberEmail' value={memberEmail} onChange={(e)=>setMembreEmail(e.target.value)} type='email' placeholder="membre@email.com" required/>
      <select name='memberRole'  id="" className="h-fit relative top-4" value={memberRole} onChange={(e)=> setMembreRole(e.target.value)}>
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

    <Button className='button-transparent  border-none rounded-md py-1  text-white'>
    <Link className='flex items-center'      to={'..'}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}>
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>
      <span className='text-xs ml-2 inline-block font-normal'>Go back to members</span>
    </Link>
    </Button>
  </div>
  )
}

export default OrganizationInviteMembrePage