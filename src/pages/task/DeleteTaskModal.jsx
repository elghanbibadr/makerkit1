import React from 'react'
import closeIcon from "../../assets/xIcon.svg";
import { useDeleteTask } from '../../hook/useDeleteTask';
import { PurpleButton } from '../../ui/PurpleButton';

const DeleteTaskModal = ({taskInfo}) => {
    const {taskId,taskName}=taskInfo || {}
  const { deleteTask, isDeleting } = useDeleteTask();

  return (
    <div className="modal bg-darkPink" role="dialog">
    <div className="max-w-[500px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.8rem] modal-box">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white">Deleting Task</h3>
        <label className="flex cursor-pointer" htmlFor="my_modal_2">
          <img
            className="h-6 hover:border-[1px] border-lightGrey p-1 rounded-full"
            src={closeIcon}
            alt="close icon"
          />
        </label>
      </div>
      <div className="text-sm text-white">
        <p>
          You are deleting the invite to <strong>{taskName}</strong>
        </p>
        <p className="my-4">Do you want to continue?</p>
      </div>
    
      <PurpleButton 
      className='bg-red-700 hover:bg-red-600'
       onClick={() => deleteTask(taskId)}
        text="Yep,delete task"
        isLoading={isDeleting}
        />
    </div>
    <label className="modal-backdrop " htmlFor="my_modal_2">
      close
    </label>
  </div>
  )
}

export default DeleteTaskModal