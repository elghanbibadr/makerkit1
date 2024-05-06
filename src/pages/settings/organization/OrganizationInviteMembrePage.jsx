import React, { useRef } from 'react'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import { useState } from 'react'
import { useInviteMembre } from '../../../hook/useInviteMembre'
import arrow from '../../../assets/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';


const OrganizationInviteMembrePage = () => {
  const [memberEmail,setOrgEmail]=useState('')
  const [memberRole,setMembreRole]=useState('membre')
 const { inviteMembre, isLoading:isInvitingMember }=useInviteMembre()
 const navigate = useNavigate();

  const form=useRef()

  function inviteMembreHandler(e){
   e.preventDefault()
   console.log("submited")
  //  getting the membre information
  const invitedMembre={
    memberRole,
    memberEmail,
    orgId:"1a52b845-58b1-4e08-a0cd-590cf886e11c",
  }
  console.log(invitedMembre)
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


    },
    (error) => {
     
      console.log('error',error)
      
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
      <Input name='memberEmail' value={memberEmail} onChange={(e)=>setOrgEmail(e.target.value)} type='email' placeholder="membre@email.com" required/>
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