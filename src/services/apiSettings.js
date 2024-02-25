
import supabase from "../../public/supabase/Supabase";
import { supabaseUrl } from "../../public/supabase/Supabase";
export async function updateUserProfil({ name, avatarURL }) {

    console.log('avatar url',avatarURL)
    await supabase.auth.updateUser({
        data: {
            fullName: name,
            avatar: avatarURL
        },
    })

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