import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { getTasks } from "../../services/apiTasks";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { AppContext } from "../../store/AppContext";
const TasksTable = ({ taskUpdateCardOpen, toggleUpdateCard }) => {
  const { session } = useContext(AppContext);
  const [openTaskId, setOpenTaskId] = useState(null);

  const toggleTaskDetails = (taskId) => {
    setOpenTaskId((prevId) => (prevId === taskId ? null : taskId));
  };
  console.log(session);
  const userId = session?.user.id;
  console.log(userId);
  // FETCHING TASKS FROM SUPABASE DEPENDING ON USERID
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", userId], // Include the user ID in the query key
    queryFn: () => getTasks(userId),
  });

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
              tasks.map((task, index) => (
                <tr key={task.id} className="text-left border-b border-accent1">
                  <td>{task.taskName}</td>
                  <td>{task.taskDescription}</td>
                  <td>{task.taskDueDate}</td>
                  <td className="w-5 cursor-pointer relative">
                    <svg
                      onClick={() => toggleTaskDetails(task.id)}
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
                    {openTaskId === task.id && (
                      <ul className="shadow-pinkBoxShadow border w-[130px] mb-10 border-gray-50 border-opacity-10 font-medium text-sm py-4 bg-[#030712] z-10 p-2 px-5 rounded-md absolute top-10 -right-0">
                        <li onClick={() => console.log(index)}>View Task</li>
                        <li className="my-1">Mark as Done</li>
                        <li>Delete Task</li>
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TasksTable;
