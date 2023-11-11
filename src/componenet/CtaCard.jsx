const CtaCard = ({ children }) => {
  return (
    <div className="p-2 text-center text-sm test shadow-grayBoxShadow m-6 w-fit px-6 rounded-full">
      <span className=" font-semibold text-lightGrey">{children}</span>
    </div>
  );
};

export default CtaCard;
