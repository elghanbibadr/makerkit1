import { useState } from "react";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import Overlay from "../../ui/Overlay";
import { useTask } from "../../hook/usetasks";
import { useUser } from "../../hook/useUser";
import { useTaskStatus } from "../../hook/useTaskStatus";
import Button from "../../ui/Button";
import { useDeleteTask } from "../../hook/useDeleteTask";
import closeIcon from '../../assets/xIcon.svg'

const TasksTable = ({ searchTaskQuery }) => {

  const [openTaskId, setOpenTaskId] = useState(null);
  const [deleteTaskModalOpen, setDeleteTaskModelOpen] = useState(false);
  const [taskToDeleteId, setTaskToDelete] = useState(null);
  const { user } = useUser()
  const userId = user?.data.user.id;
  const { changeTaskStatus, isChangingTaskStatus } = useTaskStatus()
  const {deleteTask   , isDeleting}=useDeleteTask()

  const { tasks, isLoading, error } = useTask(userId);


  console.log(tasks)
  const toggleTaskDetails = (taskId) => {
    setOpenTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  // Task delete handler
  const handleTaskDelete = (taskId) => {
    setDeleteTaskModelOpen(true);
    setTaskToDelete(taskId);
  };



  // HANDLE TASK STATUS (DONE,TODO) CHANGED
  const handleTaskStatusChanged = (taskId, isDone) => changeTaskStatus({ taskId, isDone })



  const SearchedTasks = tasks?.filter(({ taskName, taskDescription }) =>
    taskName.toLowerCase().includes(searchTaskQuery.toLowerCase()) ||
    taskDescription.toLowerCase().includes(searchTaskQuery.toLowerCase())
  );



  const handleTaskView = (taskToBeEdited) => {
    console.log(taskToBeEdited);
  };



  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && !error && tasks?.length === 0 && (
        <div className="text-white my-5">
          <h2 className="my-2">
            Hey, it looks like you don't have any tasks yet... 🤔
          </h2>
          <h3>Create your first task by clicking on the button below</h3>
        </div>
      )}
      {!isLoading && (
        <table className="w-full  border  p-2 mt-6 border-accent1 rounded-full">
          <thead className="text-gray-400  text-left border-b border-accent1 ">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tasks?.length > 0 &&
              SearchedTasks.map((task, index) => (
                <tr key={task.id} className="text-left border-b border-accent1">
                  <td>{task.taskName}</td>
                  <td>{task.taskDescription}</td>
                  {!task.isDone && <td>{task.taskDueDate}</td>}
                  {task.isDone && (
                    <td>
                      {" "}
                      <span className="text-green-500 text-xs bg-[#22c55e1a] font-semibold px-2 py-1 rounded-md ">
                        Done
                      </span>{" "}
                    </td>
                  )}
                  {!task.isDone && (
                    <td>
                      {" "}
                      <span className="bg-red-500  text-xs  text-white font-semibold px-2 py-1 rounded-md ">
                        Todo
                      </span>{" "}
                    </td>
                  )}

                  <td className="w-5 cursor-pointer relative">
                    <svg
                      onClick={() => toggleTaskDetails(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5"
                    >
                      {/* your SVG path here */}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      ></path>
                    </svg>
                    {openTaskId === index && (
                      <ul className="shadow-pinkBoxShadow border w-[130px] mb-10 border-gray-50 border-opacity-10 font-medium text-sm py-4 bg-[#030712] z-10 p-2 px-5 rounded-md absolute top-10 -right-0">
                        <li
                          onClick={() =>
                            handleTaskView({ id: task.id, ...task })
                          }
                        >
                          <Link to={`${task.id}`}>View Task</Link>
                        </li>
                        {!task.isDone && (
                          <li
                            className="my-2"
                            onClick={() => handleTaskStatusChanged(task.id, true)}
                          >
                            Mark as Done
                          </li>
                        )}
                        {task.isDone && (
                          <li
                            className="my-2"
                            onClick={() => handleTaskStatusChanged(task.id, false)}
                          >
                            Mark as Todo
                          </li>
                        )}
                        <li onClick={() => handleTaskDelete(task.id)}>
                        
                    <label  className="flex cursor-pointer" htmlFor="my_modal_2" >
                    Delete Task
                    </label>

                        </li>
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
         <input type="checkbox" id="my_modal_2" className="modal-toggle" />
              <div className="modal bg-darkPink" role="dialog">
                <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white">Deleting Task</h3>
                    <label className="flex cursor-pointer" htmlFor="my_modal_2">
                      <img className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full" src={closeIcon} alt="close icon" />

                    </label>
                  </div>
                  <div className="text-sm text-white">
                    <p>You are deleting the invite to <strong>task Name</strong></p>
                    <p className="my-4">Do you want to continue?</p>
                  </div>
                  <Button onClick={() => deleteTask(taskToDeleteId)}  className="bg-red-800 text-white  mt-6 text-sm py-2 px-5 rounded-md">
                    {/* {!isDeleting && <span>Delete Invite</span>}
                    {isDeleting && <span>Deleting Invite</span>} */}
                    <span>Yep,delete task</span>
                  </Button>
                </div>
                <label className="modal-backdrop " htmlFor="my_modal_2">
                  close
                </label>
              </div>
      {/* {deleteTaskModalOpen && (
        <Overlay>
          <DeleteTaskModal
            setDeleteTaskModelOpen={setDeleteTaskModelOpen}
            taskToDeleteId={taskToDeleteId}
          />
        </Overlay>
      )} */}
    </>
  );
};

export default TasksTable;
