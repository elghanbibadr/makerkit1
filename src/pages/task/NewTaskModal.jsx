import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createTask } from "../../services/apiTasks";
import toast from "react-hot-toast";
const NewTaskModal = ({ setNewTaskModelOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isloading } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("Task successfully created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Modal>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white">Create Task</h3>
        <svg
          onClick={() => setNewTaskModelOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          aria-hidden="true"
          className="h-6 cursor-pointer"
        >
          <path
            fill="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-lightGrey font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="input w-full"
            type="text"
            id="taskname"
            name="taskname"
            placeholder="ex. Launch on IndieHackers"
            {...register("taskName", { required: "TaskName is required" })}
          />
          {errors.taskName && (
            <p className="text-red-600 text-sm font-semibold">
              {errors.taskName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-lightGrey font-medium" htmlFor="name">
            Description
          </label>
          <textarea
            className="input w-full "
            type="text"
            placeholder="Describe the task "
            {...register("taskdescription", {
              required: "Taskdescription is required",
            })}
          />
          {errors.taskdescription && (
            <p className="text-red-600 text-sm font-semibold">
              {errors.taskdescription.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <label className="block text-lightGrey font-medium" htmlFor="name">
            Due date (optional)
          </label>
          <input className="input text-white w-full mb-2" type="date" />
          <span className="text-lightGrey text-sm mt-2 font-medium">
            Leave empty to set the due date to tomorrow
          </span>
        </div>
        <Button className="bg-darkPink  p-3 px-5 rounded-md text-sm text-white">
          Create Task
        </Button>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
