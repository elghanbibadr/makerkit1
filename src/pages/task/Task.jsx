import React, { useState } from "react";
import Button from "../../ui/Button";
import { useTask } from "../../hook/usetasks";
import NewTaskModal from "./NewTaskModal";
import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import TasksTable from "./TasksTable";

const Task = () => {
  const [searchInput, setSearchInput] = useState('');
  const { session,filteredTasks,setFilteredTasks } = useContext(AppContext);
  const userId = session?.user.id;
  const { tasks, isLoading, error } = useTask(userId);
  const [searchTaskQuery, setSearchTaskQuery] = useState(""); // State to store search query


console.log('tasks', tasks)
  
  const handleSearchInputChange = (e) => {
    setSearchTaskQuery(e.target.value)
    // filterTasks(e.target.value);
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
              
              className="button-transparent  text-white rounded-md"
            >
          <label className="flex cursor-pointer"  htmlFor="my_modal_7">

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
          </label>

            </Button>
          <input type="email" value={searchTaskQuery} onChange={handleSearchInputChange} placeholder="Search for task" className="input" />
        </div>
        <TasksTable searchTaskQuery={searchTaskQuery}  />
      </div>
   
       
          <NewTaskModal  />
 
    </>
  );
};

export default Task;
