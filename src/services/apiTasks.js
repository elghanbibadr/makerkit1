import supabase from "../../public/supabase/Supabase";

export async function getTasks(userId) {
  let { data: tasks, error } = await supabase
    .from("tasks")
    .select()
    .eq("userId", "ea203a37-5f72-40d7-bd78-b69c60c35382");

  if (error) {
    console.log(error);
  }

  return tasks;
}
