import supabase from "../../public/supabase/Supabase";

export async function getTasks() {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  if (error) {
    console.log(error);
  }

  return tasks;
}
