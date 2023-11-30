const Button = ({ children, className, withArrow, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center capitalize justify-center font-medium  transition-colors ${className}`}
    >
      {children}
      {withArrow && (
        <svg
          className="ml-3 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 animate-in fade-in slide-in-from-left-8 delay-1000 fill-mode-both duration-1000 zoom-in"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default Button;
