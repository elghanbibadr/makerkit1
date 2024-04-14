import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import inviteIcon from '../../../assets/inviteIcon.svg'
import dottedLine from '../../../assets/dottedLine.svg'
import { useGetMembres } from "../../../hook/useGetMembre";

const OrganizationMemberPage = () => {
  const {orgMembres, error, isLoading }=useGetMembres("1a52b845-58b1-4e08-a0cd-590cf886e11c")

  
  console.log("memberes err",orgMembres)
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
              // onChange={(e) => setName(e.target.value)}
              // disabled={isUpdating}
            />
               <Button
      
                  className="button-transparent text-nowrap 	 w-full sm:w-[20%]  text-white rounded-md"
                >
                 <img className="h-4 mr-2" src={inviteIcon} alt='invite membre icon'/>
                  <span className="text-sm text-nowrap	">Invite members</span>
      
                </Button>
        </div>
        {/* members list */}
        <div className="mt-7 sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center gap-3">
          <div   className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
                 <h6 className="font-semibold text-sm text-white">B</h6>
               </div>
          <span className="text-xs sm:text-[14px] font-normal text-white">xoheb32397@acname.com</span>
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
        </div>
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

          { !isLoading &&  orgMembres.orgMembers?.map(({id,memberEmail,memberRole}) =>{
            return  <div key={id} className="flex justify-between items-center mt-7 gap-3">
            <div className="flex gap-3 items-center">
              <div   className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
                     <h6 className="font-semibold text-sm uppercase text-white">{memberEmail.charAt(0)}</h6>
                   </div>
              <span className="text-xs sm:text-[14px] font-normal text-white">{memberEmail}</span>
            </div>
           <div>
           <span className=" text-xs font-medium sm:ml-5 bg-sky-500/10  text-[#0284c7] px-4 py-1 rounded-md ">
           {memberRole}
  
  
                          </span>{" "}
           </div>
          </div>
          })}
       
        </div>
      </div>
      </div>
    </>
  );
};

export default OrganizationMemberPage;
