import React, { useState } from "react";

import Button from "../../ui/Button";
import { useUser } from "../../hook/useUser";
import TasksTable from "../../../src/pages/task/TasksTable";
import NewTaskModal from "../../../src/pages/task/NewTaskModal";
import plusIcon from "../../assets/pluscircleicon.svg";

const Task = () => {

  const [searchTaskQuery, setSearchTaskQuery] = useState(""); // State to store search query

  const handleSearchInputChange = (e) => setSearchTaskQuery(e.target.value);

  return (
    <>
      <div>
        <div className="flex justify-between self-start">
          <Button className="border-accent1 flex justify-center gap-2 items-center rounded-md hover:bg-accent1 hover:text-white">
            <label className="flex items-center gap-2 cursor-pointer" htmlFor="my_modal_7">
              <img className="h-4" src={plusIcon} />
              <span>New Task</span>
            </label>
          </Button>
          <input
            type="email"
            value={searchTaskQuery}
            onChange={handleSearchInputChange}
            placeholder="Search for task"
            className="input"
          />
        </div>
        <TasksTable searchTaskQuery={searchTaskQuery} />
      </div>

      <NewTaskModal />
    </>
  );
};

export default Task;
