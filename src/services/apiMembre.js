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
    
    let { data, error } = await supabase
    .from('organizationsMembers')
    .select("*")
    // Filters
    .eq('id',membreId)
  
    if(error){
        console.log('org error',error)
    }

   return {data}
  }


  export const addOrgMembre=async(membreInfos)=>{

  await supabase
  .from('organizationsMembers')
  .insert([
    membreInfos
  ])
  .select()
  
  }