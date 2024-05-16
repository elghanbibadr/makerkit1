import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { useTask } from "../../hook/usetasks";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import { useUpdateTask } from "../../hook/useUpdateTask";
import { useUser } from "../../hook/useUser";
import { useGetSingleTask } from "../../hook/useGetSingleTask";



const SingleTask = () => {

  const { user } = useUser();
  const { id: userId } = user?.data.user;
  const { taskId } = useParams();
  const { tasks, isLoading: isGettingTask } = useTask(userId);
  const { updateTask, isUpdatingTask } = useUpdateTask()
  const [taskDescription, setTaskDescription] = useState("");

  const { singleTask, error, isLoading } = useGetSingleTask(taskId)
  const [taskName, setTaskName] = useState("");






  const handleSubmit = async (e) => {
    e.preventDefault();
    updateTask({ taskId: taskId, updatedTask: { taskName: taskName, taskDescription: taskDescription } });
  };


  useEffect(() => {
    if (isLoading || !singleTask) return

    setTaskName(singleTask[0].taskName)
    setTaskDescription(singleTask[0].taskDescription)

  }, [SingleTask, isLoading])


  return (
    <>
      {!isGettingTask && (
        <form onSubmit={handleSubmit} className="text-white text-3xl">
          <div className="flex justify-between">
            {singleTask?.length > 0 && <h3>{singleTask[0].taskName}</h3>}
            <Link to={"/dashboard/tasks"}>
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
                  Back to Task
                </p>
              </div>
            </Link>
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
                className="input overflow-hidden  w-full  "
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
      {isGettingTask && <LoadingSpinner />}
    </>
  );
};

export default SingleTask;
