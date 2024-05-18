const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="mt-14 ">
      <div className="bg-transparent border mb-2 border-accent1 p-1 rounded-lg flex justify-center  items-center w-14 h-14">
        <img className="h-6" src={imgSrc} alt="feature  image" />
      </div>
      <h4 className="text-white mb-1 mt-[2px]">{title}</h4>
      <p className="small-title">{description}</p>
    </div>
  );
};

export default FeatureCard;
