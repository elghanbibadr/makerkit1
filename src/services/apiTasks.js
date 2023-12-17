import supabase from "../../public/supabase/Supabase";

export async function getTasks(userId) {
  let { data: tasks, error } = await supabase
    .from("tasks")
    .select()
    .eq("userId", userId);

  if (error) {
    console.log(error);
  }

  return tasks;
}

export async function createTask(taskDetails) {
  // Replace 'tasks' with your actual table name
  const { error } = await supabase.from("tasks").insert([taskDetails]);

  if (error) {
    console.log(error);
  }

  // return newTask;
}
