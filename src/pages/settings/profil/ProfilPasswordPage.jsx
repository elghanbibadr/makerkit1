import Button from "../../../ui/Button";
import supabase from "../../../../public/supabase/Supabase";

const ProfilPasswordPage = () => {

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{

     const {data,error}= await supabase.auth.updateUser({ password: "clandestino@1" })
     if (error) {
      console.error('Error updating profile:', error.message);
    } else {
      console.log('Profile updated successfully:', data);
      // Optionally, you can handle success, redirect, or perform additional actions
    }
    }catch(e){
      console.log(e.message)
    }


  }
  return (
    <div>
      <div>
        <h3 className="text-white"> Password</h3>
        <p className="text-gray-400 text-lg font-normal">
          Update your password
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="small-title " htmlFor="newpassword">
            Your New Password
          </label>
          <input
            className="input block w-full "
            id="newpassword"
            name="newpassword"
            type="password"
          />
        </div>
        <div className="mt-6">
          <label className="small-title " htmlFor="repeatedpassword">
            Repeat Password
          </label>
          <input
            className="input block w-full "
            id="repeatedpassword"
            name="repeatedpassword"
            type="password"
          />
        </div>
        <Button className="bg-darkPink mt-5 text-white p-3 rounded-md text-sm">
          Update Password Address
        </Button>
      </form>
    </div>
  );
};

export default ProfilPasswordPage;
