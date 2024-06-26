import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import inviteIcon from "../../../assets/inviteIcon.svg";
import { useGetMembres } from "../../../hook/useGetMembre";
import closeIcon from "../../../assets/xIcon.svg";
import { useState } from "react";
import { useDeleteMembre } from "../../../hook/useDeleteMembre";
import { Link } from "react-router-dom";
import { useUser } from "../../../hook/useUser";
import { ButtonTransparent } from "../../../ui/Button-transparent";
import { PurpleButton } from "../../../ui/PurpleButton";

const OrganizationMemberPage = () => {
  const { isLoading: isGettingUser, user, isAuthenticated } = useUser();
  const { orgMembres, error, isLoading } = useGetMembres(
    user?.data.user.id || null
  );
  const [membreEmailToBeDeleted, setMembreEmailToBeDeleted] = useState();
  const { deletingOrgMembre, isDeleting } = useDeleteMembre();
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const userEmail = user?.data.user.email;
  const owner = { memberEmail: userEmail, memberRole: "owner" };

  console.log("member dme", membreEmailToBeDeleted);

  //  ADD THE OWNER TO BE PART OF THE ACCEPTED INVITED MEMBERS
  //  const  orgAllActiveMembres=[owner,...orgactiveAcceptedInvitedMembers]

  const filterByInviteStatus = (status) => {
    return orgMembres?.orgMembers.filter(
      ({ inviteStatus }) => inviteStatus === status
    );
  };

  // FILTERING INVITE BY STATUS
  const acceptedInvites = filterByInviteStatus("accepted") || [];
  const pendingInvites = filterByInviteStatus("pending");

  // ADD THE OWNER TO BE PART OF THE ACCEPTED INVITES
  const allActiveInvites = [owner, ...acceptedInvites];

  //  SEARCH TROUGH ACCEPTED INVITES BY EMAIL
  const SearchedAcceptedInvites = allActiveInvites.filter(({ memberEmail }) =>
    memberEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("searched invite", SearchedAcceptedInvites);

  return (
    <>
      <div>
        <div className="text-white">
          <h3> Members </h3>
          <p className="small-title">Manage and Invite members</p>
        </div>
        <div className="my-7">
          <div className="flex items-center gap-2 ">
            <input
              className=" my-0   w-full "
              id="name"
              name="name"
              // value={name}
              type="text"
              placeholder="Search members"
              onChange={(e) => setSearchQuery(e.target.value)}
              // disabled={isUpdating}
            />
            <Link to="invite">
              <ButtonTransparent text="Invite members" icon={inviteIcon} />
            </Link>
          </div>

          {SearchedAcceptedInvites?.map(({ memberRole, memberEmail }) => {
            return (
              <div className="mt-7 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
                    <h6 className="font-semibold text-sm text-white">
                      {memberEmail.at(0)}
                    </h6>
                  </div>
                  <span className="text-xs sm:text-[14px] font-normal text-white">
                    {memberEmail}
                  </span>
                  <span className="hidden sm:block text-xs font-medium sm:ml-5 bg-sky-500/10  text-[#0284c7] px-4 py-1 rounded-md ">
                    You
                  </span>{" "}
                </div>
                <div className="flex ">
                  <span className=" text-xs font-medium ml-5 bg-yellow-200  text-black px-4 py-1 rounded-md ">
                    {memberRole}
                  </span>{" "}
                </div>
              </div>
            );
          })}

          {SearchedAcceptedInvites.length === 0 && (
            <p className="text-white text-base text-center">no Result ....</p>
          )}
        </div>
      </div>
      <div></div>
      <div>
        <div className="text-white border-t-[1px] pt-10 border-lightGrey mt-16">
          <h3>Pending Invites</h3>
          <p className="text-gray-400 text-sm md:text-base font-normal">
            Manage invites not yet accepted
          </p>
          <div>
            {!isLoading &&
              pendingInvites.map(({ id, memberEmail, memberRole }) => {
                return (
                  <div
                    key={id}
                    className="flex justify-between items-center mt-7 gap-3"
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-9 h-9   flex justify-center items-center rounded-full bg-darkPink ">
                        <h6 className="font-semibold text-sm uppercase text-white">
                          {memberEmail.charAt(0)}
                        </h6>
                      </div>
                      <span className="text-xs sm:text-[14px] font-normal text-white">
                        {memberEmail}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className=" text-xs font-medium sm:ml-5 bg-sky-500/10  text-[#0284c7] px-4 py-1 rounded-md ">
                          {memberRole}
                        </span>{" "}
                        <label
                          onClick={() => setMembreEmailToBeDeleted(memberEmail)}
                          className="flex cursor-pointer"
                          htmlFor="my_modal_6"
                        >
                          <img
                            className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full"
                            src={closeIcon}
                            alt="close icon"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* modal */}

            <>
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal bg-darkPink" role="dialog">
                <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white">Deleting Invite</h3>
                    <label className="flex cursor-pointer" htmlFor="my_modal_6">
                      <img
                        className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full"
                        src={closeIcon}
                        alt="close icon"
                      />
                    </label>
                  </div>
                  <div className="text-sm">
                    <p>
                      You are deleting the invite to{" "}
                      <strong>{membreEmailToBeDeleted}</strong>
                    </p>
                    <p className="my-4">Are you sure you want to continue?</p>
                  </div>

                  <PurpleButton
                  onClick={() => deletingOrgMembre(membreEmailToBeDeleted)}
                    className="bg-red-700 hover:bg-red-600"
                    text="Delete invite"
                    isLoading={isDeleting}
                  />
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
