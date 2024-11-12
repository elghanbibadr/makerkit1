import React from 'react'

const TaskStatusBadge = ({taskStatus}) => {
  return (
    <span className={` ${taskStatus==="Completed"  ?  "bg-green-500" : taskStatus==="Pending" ? " bg-red-500 " :"bg-secondary"  } text-xs  text-white font-semibold px-2 py-1 rounded-md`}>
     {taskStatus }

  </span>
  )
}

export default TaskStatusBadge