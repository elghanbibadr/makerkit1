import supabase from "../../public/supabase/Supabase"



export const getOrganizationDetails=async(userId)=>{
    
    let { data: workflow, error } = await supabase
    .from('workflow')
    .select("*")
    // Filters
    .eq('userId',userId)
  
    if(error){
        console.log('org error',error)
    }

   return {workflow}
  }



  

export const updateOrganization=async(newOrgInfo)=>{
   console.log('org infor tesss',newOrgInfo)
    // UPDATING EITHER THE ORG NAME OF ORG LOGO URL
    let { data: organizations, error } = await supabase
    .from('organizations')
    .upsert(newOrgInfo)
    
    // Filters
    // .eq('orgId',userId)
  
    if(error){
        throw new Error(error.message)
    }

   return { organizations }
  }



  export const createOrganization=async(orgDetails)=>{
    const {data:createdOrganization,error}= await supabase
    .from('organizations')
    .insert([orgDetails])
    .select()

    if(error){
        console.log("creating org error",error)
    }

    return { createdOrganization }
  }