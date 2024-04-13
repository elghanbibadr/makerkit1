import supabase from "../../public/supabase/Supabase"



export const getOrgDetails=async(userId)=>{
    
    let { data: organizations, error } = await supabase
    .from('organizations')
    .select("*")
    // Filters
    .eq('orgId',userId)
  
    if(error){
        console.log('org error',error)
    }

   return {organizations}
  }