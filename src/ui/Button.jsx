const Button = ({ children, className }) => {
  return (
    <button
      className={`inline-flex items-center capitalize justify-center font-medium  transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
