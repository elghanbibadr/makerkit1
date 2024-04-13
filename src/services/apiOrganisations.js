import supabase from "../../public/supabase/Supabase"



export const getOrganizationDetails=async(userId)=>{
    
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



  

export const updateOrganization=async(userId)=>{
    // UPDATING EITHER THE ORG NAME OF ORG LOGO URL
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



  export const createOrganization=async(orgDetails)=>{
    const {data,error}= await supabase
    .from('organizationsMembers')
    .insert([orgDetails])
    .select()

    if(error){
        console.log("creating org error",error)
    }

    return {data}
  }