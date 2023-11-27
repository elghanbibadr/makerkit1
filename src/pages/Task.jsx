import React from "react";
import Button from "../ui/Button";

const taskData = [
  {
    Name: "vvvvvv",
    Description: "vvvvvvvvv",
    DueDate: "7 Days Ago",
  },
  {
    Name: "GHANBI BADR",
    Description: "ddddd",
    DueDate: "Done",
  },
  {
    Name: "badr",
    Description: "hhhhh",
    DueDate: "In About 7 Hours",
  },
];

const Task = () => {
  return (
    <div>
      <div className="flex justify-between self-start">
        <Button className="button-transparent text-white rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New Task</span>
        </Button>
        <input type="email" placeholder="Search for task" className="input" />
      </div>
      <table className="w-full  border p-2 mt-6 border-accent1 rounded-md">
        <thead className="text-gray-400  text-left border-b border-accent1">
          <th>Name</th>
          <th>Description</th>
          <th>Due Date</th>
        </thead>
        <tbody className="text-white">
          {taskData.map((task, index) => (
            <tr key={index} className="text-left border-b border-accent1">
              <td>{task.Name}</td>
              <td>{task.Description}</td>
              <td>{task.DueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
