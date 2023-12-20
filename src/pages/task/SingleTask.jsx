import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
const SingleTask = () => {
  const { tasks } = useContext(AppContext);
  const { taskId } = useParams();

  const taskToBeEdited = tasks?.find((task) => task.id == taskId);
  console.log(taskToBeEdited);

  console.log(taskId);
  return (
    <div className="text-white text-3xl">
      <div className="flex justify-between">
        <h3>Task Name</h3>
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
          <p className="text-sm font-medium">Back to Task</p>
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
            name="name"
            type="text"
          />
        </div>
        <div className="my-6">
          <label className="small-title block w " htmlFor="Description">
            Description
          </label>
          <textarea
            className="input  w-full  "
            type="text"
            name="Description"
            id="Description"
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
            <p className="text-sm font-medium">Back to Task</p>
          </div>
          <Button className="bg-darkPink  p-3 rounded-md text-sm">
            Update Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
