import supabase from "../../public/supabase/Supabase"

export const addProject=async(projectInfo)=>{
    const { error } = await supabase.from("projects").insert([projectInfo]);

    if (error) {
      console.log(error);
    }
  }
