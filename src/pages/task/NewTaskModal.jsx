import Modal from "../../ui/Modal";
const NewTaskModal = () => {
  return (
    <Modal>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white">Create Task</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          aria-hidden="true"
          class="h-6"
        >
          <path
            fill="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div>
        <div className="mb-6">
          <label className="block text-lightGrey font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="input w-full"
            type="text"
            placeholder="ex. Launch on IndieHackers"
          />
        </div>
        <div>
          <label className="block text-lightGrey font-medium" htmlFor="name">
            Description
          </label>
          <textarea
            className="input w-full "
            type="text"
            placeholder="Describe the task "
          />
        </div>
        <div className="my-4">
          <label className="block text-lightGrey font-medium" htmlFor="name">
            Due date (optional)
          </label>
          <input className="input text-white w-full mb-2" type="date" />
          <span className="text-lightGrey text-sm mt-2 font-normal">
            Leave empty to set the due date to tomorrow
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default NewTaskModal;
