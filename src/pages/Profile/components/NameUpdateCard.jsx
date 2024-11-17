import { useState } from "react";
import ProfilItemCard from "./ProfilItemCard";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { PurpleButton } from "../../../ui/PurpleButton";
import { useUpdateUser } from "../../../services/useUpdateUser";

// eslint-disable-next-line react/prop-types
const NameUpdateCard = ({ profileDetails }) => {
  const [name, setName] = useState("");
  const { updateProfil, isUpdating } = useUpdateUser();

  const updateUserName = async (e) => {
    e.preventDefault();
    updateProfil({
      updatedProfil: {
        ...profileDetails,
        name: name,
      },
    });
  };

  return (
    <ProfilItemCard
      title="Your Name"
      desc="Update your name to be displayed on your profile"
    >
      <form onSubmit={updateUserName}>
        <Label labelfor="name">Your Name</Label>
        <Input
          className="text-sm block py-2 w-full "
          id="name"
          name="name"
          // eslint-disable-next-line react/prop-types
          value={profileDetails?.name}
          placeholder="Profile name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          disabled={isUpdating}
        />
        <PurpleButton
          text="Update Profile"
          isLoading={isUpdating}
          disabled={isUpdating}
        />
      </form>
    </ProfilItemCard>
  );
};

export default NameUpdateCard;
