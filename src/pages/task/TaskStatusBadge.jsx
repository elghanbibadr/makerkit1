import React from 'react'

const TaskStatusBadge = ({taskStatus}) => {
  return (
    <span className={` ${!taskStatus  ? " bg-red-500 " :  "bg-green-500"} text-xs  text-white font-semibold px-2 py-1 rounded-md`}>
     {taskStatus ? "Done" : "Todo"}

  </span>
  )
}

export default TaskStatusBadge