export const getOrgMembres=async(userId)=>{
    
    let { data, error } = await supabase
    .from('organizationsMembers')
    .select("*")
    // Filters
    .eq('orgId',userId)
  
    if(error){
        console.log('org error',error)
    }

   return {data}
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