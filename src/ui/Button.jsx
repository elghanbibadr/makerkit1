const Button = ({ children, className }) => {
  return <button className={` ${className}`}>{children}</button>;
};

export default Button;

// text-white  px-4 py-2 capitalize rounded-full text-md font-semibold
