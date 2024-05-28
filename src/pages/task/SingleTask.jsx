
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUpdateTask } from "../../hook/useUpdateTask";
import { useUser } from "../../hook/useUser";
import { useGetSingleTask } from "../../hook/useGetSingleTask";
import { ButtonTransparent } from "../../ui/Button-transparent";
import arrow from "../../assets/arrow2.svg";
import { PurpleButton } from "../../ui/PurpleButton";
import { useForm } from "react-hook-form";
import Label from "../../ui/Label";
import LoadingSpinner from "../../ui/LoadingSpinner";

const SingleTask = () => {
  const { taskId } = useParams();
  const { updateTask, isUpdatingTask } = useUpdateTask();

  const {
    singleTask,
    error,
    isLoading: isGettingTask,
  } = useGetSingleTask(taskId) || [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    e.preventDefault()
    updateTask({ taskId: taskId, updatedTask: { ...data } });
  };

  return (
    <>
      { !isGettingTask ? (
        <form onSubmit={handleSubmit(onSubmit)} className="text-white text-3xl">
          <div className="flex justify-between">
            {singleTask?.length > 0 && <h3>{singleTask[0].taskName}</h3>}
            <Link to={"/dashboard/tasks"}>
              <ButtonTransparent icon={arrow} text="Back to tasks" />
            </Link>
          </div>
          <div className="w-full  md:w-1/2">
            <div>
              <Label labelfor="name">Name</Label>
              <input
                className={` w-full mb-2    ${
                  errors.taskName
                    ? "border-red-600 outline-none focus:border-red-600"
                    : ""
                }`}
                type="text"
                id="taskname"
                name="taskname"
                defaultValue={singleTask[0]?.taskName}
                placeholder="ex. Launch on IndieHackers"
                disabled={isUpdatingTask}
                {...register("taskName", { required: "TaskName is required" })}
              />
              {errors.taskName && (
                <p className="text-red-600 text-xs  font-semibold">
                  {errors.taskName.message}
                </p>
              )}
            </div>
            <div>
              <Label labelfor="taskDescription">Description</Label>
              <textarea
                className={` w-full mb-2  ${
                  errors.taskDescription
                    ? "border-red-600 outline-none focus:border-red-600"
                    : ""
                }`}
                type="text"
                name="taskDescription"
                id="taskDescription"
                defaultValue={singleTask[0]?.taskDescription}
                placeholder="Describe the task "
                disabled={isUpdatingTask}
                {...register("taskDescription", {
                  required: "TaskDescription is required",
                })}
              />
              {errors.taskDescription && (
                <p className="text-red-600 text-xs font-semibold">
                  {errors.taskDescription.message}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <Link to={"/dashboard/tasks"}>
                <ButtonTransparent
                  className="border-none"
                  icon={arrow}
                  text="Back to tasks"
                />
              </Link>
              <PurpleButton text="update task" isLoading={isUpdatingTask} />
            </div>
          </div>
        </form>
      ) : <LoadingSpinner className='h-full' />}
    </>
  );
};

export default SingleTask;
