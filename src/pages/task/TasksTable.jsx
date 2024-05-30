import { useState } from "react";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import { useTask } from "../../hook/usetasks";
import { useUser } from "../../hook/useUser";
import { useTaskStatus } from "../../hook/useTaskStatus";
import Button from "../../ui/Button";
import { useDeleteTask } from "../../hook/useDeleteTask";
import closeIcon from "../../assets/xIcon.svg";
import TaskStatusBadge from "./taskStatusBadge";
import doottedLine from "../../assets/doottedLine2.png"
import DeleteTaskModal from "./DeleteTaskModal";

const TasksTable = ({ searchTaskQuery }) => {
  const [openTaskId, setOpenTaskId] = useState(null);
  const [deleteTaskModalOpen, setDeleteTaskModelOpen] = useState(false);
  const [taskToDeleteId, setTaskToDelete] = useState(null);
  const { user } = useUser();
  const userId = user?.data.user.id;
  const { changeTaskStatus, isChangingTaskStatus } = useTaskStatus();

  const { tasks, isLoading, error } = useTask(userId);

  console.log(tasks);
  const toggleTaskDetails = (taskId) => {
    setOpenTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  // Task delete handler
  const handleTaskDelete = (taskId,taskName) => {
    setDeleteTaskModelOpen(true);
    setTaskToDelete({taskId,taskName});
  };

  // HANDLE TASK STATUS (DONE,TODO) CHANGED
  const handleTaskStatusChanged = (taskId, isDone) =>
    changeTaskStatus({ taskId, isDone });

  const SearchedTasks = tasks?.filter(
    ({ taskName, taskDescription }) =>
      taskName.toLowerCase().includes(searchTaskQuery.toLowerCase()) ||
      taskDescription.toLowerCase().includes(searchTaskQuery.toLowerCase())
  );


  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && !error && tasks?.length === 0 && (
        <div className="text-white my-5">
          <h2 className="my-2">
            Hey, it looks like you don't have any tasks yet... 🤔
          </h2>
          <p>Create your first task by clicking on the button above</p>
        </div>
      )}
      {!isLoading && (
        <table className="w-full  border   p-2 mt-6 border-accent1 rounded-md">
          <thead className="text-gray-400 rounded-md text-left border-b border-accent1 ">
            <tr>
              <th >Name</th>
              <th>Description</th>
              <th className="hidden md:block">Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tasks?.length > 0 &&
              SearchedTasks.map((task, index) => (
                <tr key={task.id} className="text-left border-b border-accent1">
                  <td>{task.taskName}</td>
                  <td>{task.taskDescription}</td>
                  {task.taskDueDate && (
                    <td className="hidden md:block"> {new Date(task.taskDueDate).toDateString()}</td>
                  )}

                  <td>
                    <TaskStatusBadge taskStatus={task.isDone} />
                  </td>

                  <td className="w-12 cursor-pointer relative">
                    <img  src={doottedLine}  onClick={() => toggleTaskDetails(index)} alt='dooted line'/>
                    
                  
                    {openTaskId === index && (
                      <ul className="shadow-pinkBoxShadow border w-[130px] mb-10 border-gray-50 border-opacity-10 font-medium text-sm py-4 bg-[#030712] z-10 p-2 px-5 rounded-md absolute top-10 -right-0">
                        <li
                        
                        >
                          <Link to={`${task.id}`}>view Task</Link>
                        </li>
                        { (
                          <li
                            className="my-2 text-nowrap"
                            onClick={() =>
                              handleTaskStatusChanged(task.id, !task.isDone)
                            }
                          >
                            {task.isDone ? "mark as todo" :" mark as done" }  
                          </li>
                        )}
                       
                        <li onClick={() => handleTaskDelete(task.id,task.taskName)}>
                          <label
                            className="flex cursor-pointer"
                            htmlFor="my_modal_2"
                          >
                            delete Task
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
      { !isLoading && !error && SearchedTasks?.length === 0 && <p className="text-white text-center mt-10">No task found .... 🤔</p> }
      <input type="checkbox" id="my_modal_2" className="modal-toggle" />
      <DeleteTaskModal taskInfo={taskToDeleteId} />
    </>
  );
};

export default TasksTable;
