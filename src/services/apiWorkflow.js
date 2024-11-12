import supabase from "../../public/supabase/Supabase";

export const getWorkflow=async(userId)=>{
    
    let { data: workflow, error } = await supabase
    .from('workflows')
    .select("*")
    // Filters
    .eq('workflowId',userId)
  
    if(error){
        console.log('org error',error)
    }

   return {workflow,error}
  }



export const createWorkflow=async(workflowDetails)=>{
    console.log("workflowdetails",workflowDetails)
  // return
    const {data:createWorkflow,error}= await supabase
    .from('workflows')
    .insert([workflowDetails])
    .select()
  
    if(error){
        console.log("creating org error",error)
    }
  
  
    return { createWorkflow }
  }