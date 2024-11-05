import supabase from "../../public/supabase/Supabase"

export const getProjectMembers=async(projectId)=>{
    console.log('projectid',projectId)
    let { data:projectMembers, error } = await supabase
    .from('projectMembre')
    .select("*")
    // Filters
    .eq('projectId',projectId)
  
    if(error){
        console.log('getting org members error',error)
    }
 
   return { projectMembers }
  }



  export const deleteOrgMembre=async(membreEmail)=>{

    console.log("id to be deleted",membreEmail)
    
    let { data, error } = await supabase
    .from('organizationsMembers')
    .delete()
    // Filters
    .eq('memberEmail',membreEmail)
  
    if(error){
        console.log('org error',error)
    }

   return {data,error}
  }


  export const addOrgMembre=async(membreInfos)=>{
console.log("data membre invited",membreInfos)
  await supabase
  .from('organizationsMembers')
  .insert([
    membreInfos
  ])
  .select()
  
  }




  export const handleInviteAccepted=async (membreEmail)=>{
    const {data,error}=await supabase
    .from('organizationsMembers')
    .update({inviteStatus:"accepted"})
    // Filters
    .eq('memberEmail',membreEmail)
  
    if(error){
        console.log('getting org members error',error)
    }

    return data
  }