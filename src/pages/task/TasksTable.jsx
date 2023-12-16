import React from "react";
import { useQuery } from "react-query";
import { getTasks } from "../../services/apiTasks";

const TasksTable = ({ taskUpdateCardOpen, toggleUpdateCard }) => {
  // FETCHING TASKS FROM SUPABASE DEPENDING ON USERID
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  return (
    <table className="w-full  border p-2 mt-6 border-accent1 rounded-md">
      <thead className="text-gray-400  text-left border-b border-accent1">
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
                  onClick={() => toggleUpdateCard(index)}
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
                {taskUpdateCardOpen[index] && (
                  <ul className="shadow-pinkBoxShadow border w-[130px] mb-10 border-gray-50 border-opacity-10 font-medium text-sm py-4 bg-[#030712] z-10 p-2 px-5 rounded-md absolute top-10 -right-0">
                    <li>View Task</li>
                    <li className="my-1">Mark as Done</li>
                    <li>Delete Task</li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
