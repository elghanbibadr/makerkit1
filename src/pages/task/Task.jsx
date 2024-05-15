import React, { useState } from "react";

import Button from "../../ui/Button";
import { useUser } from "../../hook/useUser";
import TasksTable from "../../../src/pages/task/TasksTable"
import NewTaskModal from "../../../src/pages/task/NewTaskModal"

const Task = () => {

  const {user}=useUser()
  const userId = user?.data.user.id;

  const [searchTaskQuery, setSearchTaskQuery] = useState(""); // State to store search query


  
  const handleSearchInputChange = (e) => setSearchTaskQuery(e.target.value)  ;
  


  
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

}

export default Task;
