import supabase from "../../public/supabase/Supabase"



export const addProject=async(projectInfo)=>{
  console.log("project info",projectInfo)
  // return
    const { error } = await supabase.from("projects").insert(projectInfo);

    if (error) {
      console.log(error);
    }
  }


