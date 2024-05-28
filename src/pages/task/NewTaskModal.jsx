import { useForm } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import closeIcon from '../../assets/xIcon.svg'
import { AppContext } from "../../store/AppContext";
import Datepicker from "tailwind-datepicker-react"
import { useCreateTask } from "../../hook/useCreateTask";
import { generateUniqueRandomNumber } from "../../utils/Utils";
import { options  } from "../../utils/Utils";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import { PurpleButton } from "../../ui/PurpleButton";

const NewTaskModal = () => {
  const { session } = useContext(AppContext);
  const [show, setShow] = useState(false)
  const currentUserId = session?.user.id;
  const modalCheckboxRef = useRef(null);
  const [taskDueDate, setTaskDueDate] = useState(new Date(+new Date() + 86400000))
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createTask, isCreatingTask } = useCreateTask()

  const onSubmit = (data) => {
    createTask({
      id: generateUniqueRandomNumber(),
      userId: currentUserId,
      taskDueDate:taskDueDate,
      ...data,
    });
    // modalCheckboxRef.current.checked=false
    
    reset()
  };

  const handleChange = (selectedDate) => setTaskDueDate(selectedDate)
  const handleClose = (state) => setShow(state)


  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" ref={modalCheckboxRef} />
      <div className="modal bg-darkPink" role="dialog">
        <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-white">Create Task</h4>
            <img className="h-6 cursor-pointer" src={closeIcon} alt="close Icon" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <Label className="block text-lightGrey font-medium" htmlFor="name">
                Name
              </Label>
              <input
                className="input w-full"
                type="text"
                id="taskname"
                name="taskname"
                placeholder="ex. Launch on IndieHackers"
                disabled={isCreatingTask}
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
                disabled={isCreatingTask}
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
                Due date
              </label>
              {/* <input className="input text-white w-full mb-2" type="date" /> */}
              <div className="">
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
              </div>
            </div>
        
            <PurpleButton text="create task" isLoading={isCreatingTask} />
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
