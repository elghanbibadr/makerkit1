const Modal = ({ children }) => {
  return (
    <div className="w-[400px] shadow-pinkBoxShadow z-10 bg-[#030712] p-7 rounded-[0.5rem]">
      {children}
    </div>
  );
};

export default Modal;
