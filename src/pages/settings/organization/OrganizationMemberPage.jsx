import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import inviteIcon from '../../../assets/inviteIcon.svg'
import dottedLine from '../../../assets/dottedLine.svg'
import { useGetMembres } from "../../../hook/useGetMembre";
import closeIcon from '../../../assets/xIcon.svg'
import { useState } from "react";
import { deleteOrgMembre } from "../../../services/apiMembre";
import { useDeleteMembre } from "../../../hook/useDeleteMembre";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../hook/useUser";
const OrganizationMemberPage = () => {
  const { orgMembres, error, isLoading } = useGetMembres("1a52b845-58b1-4e08-a0cd-590cf886e11c")
  const [membreEmailToBeDeleted, setMembreEmailToBeDeleted] = useState()
  const { deletingOrgMembre, isDeleting } = useDeleteMembre()
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const  {isLoading:isGettingUser,user,isAuthenticated}=useUser()
  const userEmail=user?.data.user.email
  const owner={memberEmail:userEmail,memberRole:"owner"}




//  ADD THE OWNER TO BE PART OF THE ACCEPTED INVITED MEMBERS
  //  const  orgAllActiveMembres=[owner,...orgactiveAcceptedInvitedMembers]

  const filterByInviteStatus=(status) =>{
   return  orgMembres?.orgMembers.filter(({ inviteStatus }) =>
      inviteStatus===status
    );
  }



  // FILTERING INVITE BY STATUS
  const acceptedInvites = filterByInviteStatus("accepted") || []
  const pendingInvites=filterByInviteStatus('pending')



  // ADD THE OWNER TO BE PART OF THE ACCEPTED INVITES
   const allActiveInvites=[owner,...acceptedInvites]



  //  SEARCH TROUGH ACCEPTED INVITES BY EMAIL
  const SearchedAcceptedInvites = allActiveInvites.filter(({ memberEmail }) =>
    memberEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <>
      <div>
        <div className="text-white">
          <h3> Members </h3>
          <p className="text-gray-400 text-sm md:text-base font-normal">
            Manage and Invite members
          </p>
        </div>
        <div className="my-7">
          <div className="sm:flex  gap-2 ">
            <Input
              className="  block mt-0 w-full "
              id="name"
              name="name"
              // value={name}
              type="text"
              placeholder='Search members'
            onChange={(e) => setSearchQuery(e.target.value)}
            // disabled={isUpdating}
            />
            <Link to='invite' className="w-full sm:w-[20%]  " >

              <Button
                className="button-transparent  relative top-2 	text-white rounded-md "
              >

                <img className="h-4 mr-2" src={inviteIcon} alt='invite membre icon' />
                <span className="text-[0.8rem] text-nowrap	">Invite members</span>

              </Button>
            </Link>

          </div>
          {/* members list */}
          {/* "me" */}
        {/* {  <div className="mt-7 sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
                <h6 className="font-semibold text-sm text-white">B</h6>
              </div>
             <span className="text-xs sm:text-[14px] font-normal text-white">{userEmail} </span>
              <span className=" text-xs font-medium sm:ml-5 bg-sky-500/10  text-[#0284c7] px-4 py-1 rounded-md ">
                You
              </span>{" "}
            </div>
            <div className="flex ">
              <span className=" text-xs font-medium ml-5 bg-yellow-200  text-black px-4 py-1 rounded-md ">
                Owner
              </span>{" "}
              <img className="h-6 relative left-3 cursor-pointer cursor-not-allowed" src={dottedLine} alt="" />
            </div>
          </div> } */}
          {/*  */}


        { acceptedInvites.length > 0  && SearchedAcceptedInvites?.map(({memberRole,memberEmail}) =>{

          return <div className="mt-7 sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
              <h6 className="font-semibold text-sm text-white">{memberEmail.at(0)}</h6>
            </div>
            <span className="text-xs sm:text-[14px] font-normal text-white">{memberEmail}</span>
            <span className=" text-xs font-medium sm:ml-5 bg-sky-500/10  text-[#0284c7] px-4 py-1 rounded-md ">
              You
            </span>{" "}
          </div>
          <div className="flex ">
            <span className=" text-xs font-medium ml-5 bg-yellow-200  text-black px-4 py-1 rounded-md ">
             {memberRole}
            </span>{" "}
            {/* <img className="h-6 relative left-3 cursor-pointer cursor-not-allowed" src={dottedLine} alt="" /> */}
          </div>
        </div>
        })  }

        {SearchedAcceptedInvites.length=== 0  && <p className="text-white text-base text-center">no Result ....</p> }
        </div>
      </div>
      <div>

      </div>
      <div>
        <div className="text-white border-t-[1px] pt-10 border-lightGrey mt-16">
          <h3>Pending Invites
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-normal">
            Manage invites not yet accepted


          </p>
          <div>

            {!isLoading && pendingInvites.map(({ id, memberEmail, memberRole }) => {
              return <div key={id} className="flex justify-between items-center mt-7 gap-3">
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
                    <h6 className="font-semibold text-sm uppercase text-white">{memberEmail.charAt(0)}</h6>
                  </div>
                  <span className="text-xs sm:text-[14px] font-normal text-white">{memberEmail}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className=" text-xs font-medium sm:ml-5 bg-sky-500/10  text-[#0284c7] px-4 py-1 rounded-md ">{memberRole}</span>{" "}
                    <label onClick={() => setMembreEmailToBeDeleted(id)} className="flex cursor-pointer" htmlFor="my_modal_6">
                      <img className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full" src={closeIcon} alt="close icon" />


                    </label>

                  </div>
                </div>
              </div>
            })}
            {/* modal */}


            <>
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal bg-darkPink" role="dialog">
                <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white">Deleting Invite</h3>
                    <label className="flex cursor-pointer" htmlFor="my_modal_6">
                      <img className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full" src={closeIcon} alt="close icon" />

                    </label>
                  </div>
                  <div className="text-sm">
                    <p>You are deleting the invite to <strong>{membreEmailToBeDeleted}</strong></p>
                    <p className="my-4">Are you sure you want to continue?</p>
                  </div>
                  <Button onClick={() => deletingOrgMembre(membreEmailToBeDeleted)} className="bg-red-800 mt-6 text-sm py-2 px-5 rounded-md">
                    {!isDeleting && <span>Delete Invite</span>}
                    {isDeleting && <span>Deleting Invite</span>}
                  </Button>
                </div>
                <label className="modal-backdrop " htmlFor="my_modal_6">
                  close
                </label>
              </div>


            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationMemberPage;
