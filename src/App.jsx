import Button from "./ui/Button";

const App = () => {
  return (
    <div className="text-white">
      <button className="inline-flex items-center justify-center font-medium  transition-colors  border border-input bg-background hover:bg-accent1 hover:text-white text-sm h-10 px-4 rounded-full">
        <span className="mr-3 capitalize">get started</span>{" "}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>{" "} */}
        <span> &gt;</span>
      </button>
    </div>
  );
};

export default App;
