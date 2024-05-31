const CtaCard = ({ children ,className}) => {
  return (
    <div className={`p-2 text-center  text-xs  md:text-sm mx-auto test shadow-grayBoxShadow m-6 w-fit px-6 rounded-full ${className}`}>
      <span className=" font-semibold text-lightGrey">{children}</span>
    </div>
  );
};

export default CtaCard;
