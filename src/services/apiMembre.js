import supabase from "../../public/supabase/Supabase"

export const getOrgMembres=async(orgId)=>{
    
    let { data:orgMembers, error } = await supabase
    .from('organizationsMembers')
    .select("*")
    // Filters
    .eq('orgId',orgId)
  
    if(error){
        console.log('getting org members error',error)
    }
 
    console.log("my",orgMembers)
   return { orgMembers }
  }



  export const deleteOrgMembre=async(membreId)=>{

    console.log("id to be deleted",membreId)
    
    let { data, error } = await supabase
    .from('organizationsMembers')
    .delete()
    // Filters
    .eq('id',membreId)
  
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