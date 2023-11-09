const Button = ({ children, className }) => {
  return (
    <button
      className={`text-white  px-4 py-2 capitalize rounded-full text-md font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
