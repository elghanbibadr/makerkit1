import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

export const DeleteTaskModal = ({ setDeleteTaskModelOpen }) => {
  return (
    <Modal>
      <div className="text-white">
        <div className="flex justify-between items-center">
          <h3>Deleting Task</h3>
          <svg
            onClick={() => setDeleteTaskModelOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            aria-hidden="true"
            className="h-6  cursor-pointer"
          >
            <path
              fill="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <p className="text-sm font-medium my-4">
          You are about to delete the task badt Do you want to continue?
        </p>

        <Button className="bg-[#721b1c] rounded-md p-2 px-3">
          Yep,delete task
        </Button>
      </div>
    </Modal>
  );
};
