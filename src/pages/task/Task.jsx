import React, { useState } from "react";
import TasksTable from "../../../src/pages/task/TasksTable";
import NewTaskModal from "../../../src/pages/task/NewTaskModal";
import plusIcon from "../../assets/pluscircleicon.svg";
import { ButtonTransparent } from "../../ui/Button-transparent";
import Input from "../../ui/Input";

const Task = () => {

  const [searchTaskQuery, setSearchTaskQuery] = useState(""); // State to store search query

  const handleSearchInputChange = (e) => setSearchTaskQuery(e.target.value);

  return (
    <>
        <div className="flex justify-between self-start">
        
          <ButtonTransparent icon={plusIcon}>
          <label className="flex items-center gap-2 cursor-pointer" htmlFor="my_modal_7">
              <span>New Task</span>
          </label>
          </ButtonTransparent>

          <Input
            type="email"
            value={searchTaskQuery}
            onChange={handleSearchInputChange}
            placeholder="Search for task"
            className="input max-w-[300px]"
          />
        </div>
        <TasksTable searchTaskQuery={searchTaskQuery} />

      <NewTaskModal />
    </>
  );
};

export default Task;
