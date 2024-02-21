
import supabase from "../../public/supabase/Supabase";

export async function updateUserProfil({name,avatarURL}){
    console.log("avatar url",avatarURL)

        const {data,error}=  await supabase.auth.updateUser({
          
            data: {
                fullName: name,
                avatar:avatarURL
              },
           })
      
   if(error ) console.log(error)
        console.log('data',data)
}

