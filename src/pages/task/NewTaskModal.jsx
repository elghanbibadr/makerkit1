import { useForm } from "react-hook-form";
import {  useState } from "react";
import closeIcon from '../../assets/xIcon.svg'
import Datepicker from "tailwind-datepicker-react"
import { useCreateTask } from "../../hook/useCreateTask";
import { generateUniqueRandomNumber } from "../../utils/Utils";
import { options  } from "../../utils/Utils";
import Label from "../../ui/Label";
import { PurpleButton } from "../../ui/PurpleButton";

const NewTaskModal = () => {
  const [show, setShow] = useState(false)
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
      projectId:3,
      taskDueDate:taskDueDate,
      ...data,
    });
    
    reset()
  };

  const handleDateChange = (selectedDate) => setTaskDueDate(selectedDate)
  const handleClose = (state) => setShow(state)



  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal z-50 bg-darkPink" role="dialog">
        <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-white">Create Task</h4>
            <label className="flex cursor-pointer" htmlFor="my_modal_7">
          <img
            className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full"
            src={closeIcon}
            alt="close icon"
          />
        </label>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div >
              <Label labelfor="name">
                Name
              </Label>
              <input
                className={` w-full mb-2    ${errors.taskName ? "border-red-600 outline-none focus:border-red-600":""}`}
                type="text"
                id="taskname"
                name="taskname"
                placeholder="ex. Launch on IndieHackers"
                disabled={isCreatingTask}
                {...register("taskName", { required: "TaskName is required" })}
              />
              {errors.taskName && (
                <p className="text-red-600 text-xs  font-semibold">
                  {errors.taskName.message}
                </p>
              )}
            </div>
          
              <div>
                <Label
                 labelfor="taskDescription"
                >
                  Description
                </Label>
                <textarea
                  className={` w-full mb-2  ${errors.taskDescription ? "border-red-600 outline-none focus:border-red-600":""}`}
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
                  <p className="text-red-600 text-xs font-semibold">
                    {errors.taskDescription.message}
                  </p>
                )}
              </div>
           <div>
             
                   <Label  labelfor="name">
                  Due date
                </Label>
             
                  <Datepicker options={options} onChange={handleDateChange} show={show} setShow={handleClose} />
             
             
           </div>
        
            <PurpleButton  text="create task" disabled={isCreatingTask}  isLoading={isCreatingTask} />
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
