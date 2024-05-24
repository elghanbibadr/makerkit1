
import supabase from "../../public/supabase/Supabase";
import { supabaseUrl } from "../../public/supabase/Supabase";
export async function updateUserProfil(userId,updatedProfil) {


    console.log("updated profil",updatedProfil)
    const { data, error } = await supabase
    .from('profiles')
    .update(updatedProfil)
    .eq('userId', userId)
    .select()

}




export async function uploadAvatar(fileName, file) {
    await supabase.storage
        .from('avatars')
        .upload(fileName, file);

}



export async function updatePassword(password) {
    const { error } = await supabase.auth.updateUser({ password: password })
    if (error) {
        console.error('Error updating profile:', error.message);
    }
}