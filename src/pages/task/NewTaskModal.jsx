import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createTask } from "../../services/apiTasks";
import toast from "react-hot-toast";
import { useContext, useEffect, useRef, useState } from "react";
import { queryClient } from "../../App";
import closeIcon from '../../assets/xIcon.svg'
import { AppContext } from "../../store/AppContext";
import Datepicker from "tailwind-datepicker-react"
const options = {
	// title: "Demo Title",
	// autoHide: true,
	todayBtn: false,
	clearBtn: false,
	// clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-[#030712]   shadow-darkPink ",
	
		// icons: "",
		text: " text-white hover:text-darkPink",
		
		input: "bg-[#030712] input cursor-pointer focus:border-auto",
		inputIcon: "hidden",
		selected: "bg-darkPink text-darkPink hover:text-darkPink hover:bg-white",
	},
	// icons: {

	// 	prev: () => <span className="h-1 w-10 block"></span>,
	// 	next: () => <span className="h-1 w-10 block"></span>,
	// },
	datepickerClassNames: "top-10",
	defaultDate: new Date(),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

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

  const [show, setShow] = useState(false)
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}
  

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
            {/* <input className="input text-white w-full mb-2" type="date" /> */}
            <div className="">
              <Datepicker  options={options} onChange={handleChange} show={show} setShow={handleClose} />
            </div>

          </div>
         
            <button
              type="submit"
              className="bg-darkPink  p-3 px-5 rounded-md text-sm text-white"
            >
              Create Task
            </button>
         

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
