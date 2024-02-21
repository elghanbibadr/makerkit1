
import supabase from "../../public/supabase/Supabase";

export async function updateUserProfil(name,avatarURL){
          await supabase.auth.updateUser({
          data: {
            fullName: name,
            avatar:avatarURL
          },
        }); 
}

