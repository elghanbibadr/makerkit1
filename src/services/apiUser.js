import supabase from "../../public/supabase/Supabase"

export default async function getUser() {
    const { data, error } = await supabase.auth.getUser()


    if(error){
      throw new Error(error.message)
      console.log('error',error)
    }
    return { data, error }
}

// export  async function getSession() {
//     const { data, error } = await supabase.auth.getSession()


//     if(error){
//       throw new Error(error.message)
//       return 
//     }
//     return { data, error }
// }




export  async function UpdateUserEmail(newEmail) {
    const { data, error } = await supabase.auth.updateUser({
        email: newEmail,

    },{
        emailRedirectTo:"http://localhost:5173/emailChanged"
    })



    // WE NEED TO THROW ERRORS PROGRAMATICLY SO REACT QUERY COULD RECOQNIZE THEM
    if(error) throw new Error(` ${error.message}`)
    return { data }
} 



export const getUserProfilDetails=async(userId)=>{
    
    let { data: profilDetails, error } = await supabase
    .from('profiles')
    .select("*")
    // Filters
    .eq('userId',userId)
  
    if(error){
        console.log('org error',error)
    }

   return {profilDetails}
  }
