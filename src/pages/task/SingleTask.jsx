import { useContext, useState } from "react";
import { AppContext } from "../../store/AppContext";
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import supabase from "../../../public/supabase/Supabase";
import { useTask } from "../../hook/usetasks";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SingleTask = () => {
  const { session } = useContext(AppContext);
  const { taskId } = useParams();
  const userId = session?.user.id;
  const { tasks, isLoading } = useTask(userId);
  const taskTobeEdited = tasks?.find((task) => task.id == taskId);
  const [taskName, setTaskName] = useState(taskTobeEdited?.taskName);
  const [taskDescription, setTaskDescription] = useState(
    taskTobeEdited?.taskDescription
  );

  console.log("task description", taskDescription);


  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(taskDescription)
    console.log(taskName)
    try{
      const { data, error } = await supabase
      .from('tasks')
      .update({taskName:taskName,taskDescription:taskDescription})
      .eq('id', taskId)
      .select()
    }catch(e){
      alert(e.message)
    }
   
  }

  return (
    <>
      {!isLoading && (
        <form onSubmit={handleSubmit} className="text-white text-3xl">
          <div className="flex justify-between">
            <h3>{taskTobeEdited?.taskName}</h3>
            <div className="flex items-center cursor-pointer button-transparent border-none rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="mr-2 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                ></path>
              </svg>
              <p className="text-sm font-medium">
                <Link to="/dashboard/tasks">Back to Task</Link>
              </p>
            </div>
          </div>
          <div className="w-full  md:w-1/2">
            <div className="mt-6">
              <label className="small-title " htmlFor="name">
                Name
              </label>
              <input
                className="input block w-full "
                id="name"
                value={taskName}
                name="name"
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="my-6">
              <label className="small-title block w " htmlFor="Description">
                Description
              </label>
              <textarea
                className="input  w-full  "
                type="text"
                value={taskDescription}
                name="Description"
                id="Description"
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Describe the task "
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center cursor-pointer button-transparent border-none rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="mr-2 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  ></path>
                </svg>
                <p className="text-sm font-medium">
                  <Link to="/dashboard/tasks">Back to Task</Link>
                </p>
              </div>
              <Button className="bg-darkPink  p-3 rounded-md text-sm">
                Update Task
              </Button>
            </div>
          </div>
        </form>
      )}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default SingleTask;
