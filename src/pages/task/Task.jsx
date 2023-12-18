import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Overlay from "../../ui/Overlay";
import NewTaskModal from "./NewTaskModal";
import LoadingSpinner from "../../ui/LoadingSpinner";
import TasksTable from "./TasksTable";

const Task = () => {
  // const [taskUpdateCardOpen, setTaskUpdateCardOpen] = useState(false);
  const [newTaskModalOpen, setNewTaskModelOpen] = useState(false);

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
        <TasksTable />
      </div>
      {newTaskModalOpen && (
        <Overlay>
          <NewTaskModal setNewTaskModelOpen={setNewTaskModelOpen} />
        </Overlay>
      )}
    </>
  );
};

export default Task;
