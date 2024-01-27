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

// task AS done
export async function markTaskAsDone(taskId) {
  // Replace 'tasks' with your actual table name
  const { data, error } = await supabase
    .from("tasks") // Replace 'yourTableName' with your actual table name
    .update({ ["isDone"]: true })
    .eq("id", taskId); // Replace 'id' with the actual name of your ID column
  if (error) {
    console.log(error);
  }
}

// task AS Todo
export async function markTaskAsTodo(taskId) {
  // Replace 'tasks' with your actual table name
  const { data, error } = await supabase
    .from("tasks") // Replace 'yourTableName' with your actual table name
    .update({ ["isDone"]: false })
    .eq("id", taskId); // Replace 'id' with the actual name of your ID column
  if (error) {
    console.log(error);
  }
}


// UPDATE TASKS

export async function updateTask(taskId,updatedTask){
  try{
    const { data, error } = await supabase
    .from('tasks')
    .update(updatedTask)
    .eq('id', taskId)
    .select()
  }catch(e){
    alert(e.message)
  }
}
