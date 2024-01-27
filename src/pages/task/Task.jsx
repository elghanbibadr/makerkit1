import React, { useState } from "react";
import Button from "../../ui/Button";
import Overlay from "../../ui/Overlay";
import { useTask } from "../../hook/usetasks";
import NewTaskModal from "./NewTaskModal";
import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import TasksTable from "./TasksTable";

const Task = () => {
  const [newTaskModalOpen, setNewTaskModelOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { session,filteredTasks,setFilteredTasks } = useContext(AppContext);
  const userId = session?.user.id;
  const { tasks, isLoading, error } = useTask(userId);


console.log('tasks', tasks)
  
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    filterTasks(e.target.value);
  };

  const filterTasks = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.taskName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
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
          <input type="email" value={searchInput} onChange={handleSearchInputChange} placeholder="Search for task" className="input" />
        </div>
        <TasksTable searchInput={searchInput}  />
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
