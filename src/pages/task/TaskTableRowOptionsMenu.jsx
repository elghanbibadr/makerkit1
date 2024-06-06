import React from 'react'

const TaskTableRowOptionsMenu = ({taskId}) => {
  return (
    <ul className="shadow-pinkBoxShadow border w-[130px] mb-10 border-gray-50 border-opacity-10 font-medium text-sm py-4 bg-[#030712] z-10 p-2 px-5 rounded-md absolute top-10 -right-0">
    <li
    
    >
      <Link to={`${task.id}`}>View Task</Link>
    </li>
    {!task.isDone && (
      <li
        className="my-2"
        onClick={() =>
          handleTaskStatusChanged(task.id, true)
        }
      >
        Mark as Done
      </li>
    )}
    {task.isDone && (
      <li
        className="my-2"
        onClick={() =>
          handleTaskStatusChanged(task.id, false)
        }
      >
        Mark as Todo
      </li>
    )}
    <li onClick={() => handleTaskDelete(task.id)}>
      <label
        className="flex cursor-pointer"
        htmlFor="my_modal_2"
      >
        Delete Task
      </label>
    </li>
  </ul>
  )
}

export default TaskTableRowOptionsMenu