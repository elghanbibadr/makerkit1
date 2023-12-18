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

export async function deleteTask(taskId) {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", taskId);

    if (error) {
      console.error("Error deleting task:", error.message);
      throw error;
    }

    return data; // Optionally return data if needed
  } catch (error) {
    console.error("Error in deleteTask:", error.message);
    throw error; // Rethrow the error to be caught by the calling code
  }
}
