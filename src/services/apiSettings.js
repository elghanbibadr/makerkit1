
import supabase from "../../public/supabase/Supabase";
import { supabaseUrl } from "../../public/supabase/Supabase";
export async function updateUserProfil(userId,updatedProfil) {


    console.log("updated profil",updatedProfil)
    const { data, error } = await supabase
    .from('profiles')
    .update(updatedProfil)
    .eq('userId', userId)
    .select()

    if(error){
        throw new Error(error.message)
    }

}




export async function uploadAvatar(fileName, file) {
    console.log("file name from upload",fileName)
    const {data,error}= await supabase.storage
        .from('avatars')
        .upload(fileName, file,{
            upsert:true
        });
if(error) throw new Error(error.message)
console.log("upload data",data)

return data
}



export async function updatePassword(password) {
    const { error } = await supabase.auth.updateUser({ password: password })
    if (error) {
        console.error('Error updating profile:', error.message);
    }
}