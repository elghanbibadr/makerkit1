import Button from "../ui/Button";
const Task = () => {
  return (
    <div>
      <div className="flex justify-between self-start">
        <Button className="button-transparent text-white rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New Task</span>
        </Button>
        <input type="email" placeholder="Search for task" className="input" />
      </div>
    </div>
  );
};

export default Task;
