
import supabase from "../../public/supabase/Supabase";
import { supabaseUrl } from "../../public/supabase/Supabase";
export async function updateUserProfil({ name, avatarURL }) {
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