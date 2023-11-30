import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Overlay from "../../ui/Overlay";
import NewTaskModal from "./NewTaskModal";
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
  // const [taskUpdateCardOpen, setTaskUpdateCardOpen] = useState(false);
  const [newTaskModalOpen, setNewTaskModelOpen] = useState(false);
  const [taskUpdateCardOpen, setTaskUpdateCardOpen] = useState(
    Array(taskData.length).fill(false)
  );

  const toggleUpdateCard = (index) => {
    const newCardOpenState = [...taskUpdateCardOpen];
    newCardOpenState[index] = !newCardOpenState[index];
    setTaskUpdateCardOpen(newCardOpenState);
  };
  return (
    <>
      <div>
        <div className="flex justify-between self-start">
          <Button
            onClick={() => setNewTaskModelOpen(true)}
            className="button-transparent text-white rounded-md"
          >
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
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {taskData.map((task, index) => (
              <tr key={index} className="text-left border-b border-accent1">
                <td>{task.Name}</td>
                <td>{task.Description}</td>
                <td>{task.DueDate}</td>
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
      </div>
      {newTaskModalOpen && (
        <Overlay>
          <NewTaskModal />
        </Overlay>
      )}
    </>
  );
};

export default Task;
