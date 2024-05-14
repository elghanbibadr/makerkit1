import supabase from "../../public/supabase/Supabase"

export default async function getUser() {
    const { data, error } = await supabase.auth.getUser()

    return { data, error }
}




export  async function UpdateUserEmail(newEmail) {
    const { data, error } = await supabase.auth.updateUser({
        email: newEmail,

    },{
        emailRedirectTo:"http://localhost:5173/emailChanged"
    })

    return { data, error }
} 
