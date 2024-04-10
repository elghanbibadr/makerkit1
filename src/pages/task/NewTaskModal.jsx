import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createTask } from "../../services/apiTasks";
import toast from "react-hot-toast";
import { useContext, useEffect, useRef } from "react";
import { queryClient } from "../../App";
import closeIcon from '../../assets/xIcon.svg'
import { AppContext } from "../../store/AppContext";
function generateUniqueRandomNumber() {
  // Multiply Math.random() by a large number to get a floating-point value,
  // then convert it to an integer using Math.floor().
  const randomNumber = Math.floor(Math.random() * 1000000);

  return randomNumber;
}

// eslint-disable-next-line react/prop-types
const NewTaskModal = () => {
  const { session } = useContext(AppContext);
  const currentUserId = session.user.id;
  const modalCheckboxRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isloading } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      modalCheckboxRef.current.checked = false;

      toast.success("Task successfully created");
      queryClient.invalidateQueries("tasks");
   
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data) => {
    mutate({
      id: generateUniqueRandomNumber(),
      userId: currentUserId,
      ...data,
    });
  };


  

  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" ref={modalCheckboxRef} />
<div className="modal bg-darkPink" role="dialog">
  <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
  <div className="flex justify-between items-center mb-6">
          <h3 className="text-white">Create Task</h3>
         <img className="h-6 cursor-pointer"  src={closeIcon} alt="close Icon" />
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
            <label
              className="block text-lightGrey font-medium"
              htmlFor="taskDescription"
            >
              Description
            </label>
            <textarea
              className="input w-full "
              type="text"
              name="taskDescription"
              id="taskDescription"
              placeholder="Describe the task "
              {...register("taskDescription", {
                required: "TaskDescription is required",
              })}
            />
            {errors.taskDescription && (
              <p className="text-red-600 text-sm font-semibold">
                {errors.taskDescription.message}
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
          <label htmlFor="my_modal_7">
            <button
              type="submit"
              className="bg-darkPink  p-3 px-5 rounded-md text-sm text-white"
            >
              Create Task
            </button>
          </label>

        </form>
  </div>
  <label className="modal-backdrop " htmlFor="my_modal_7">
    close
  </label>
</div> 

   
    </>
  );
};

export default NewTaskModal;
