const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div>
      <div className="bg-[#23114e] p-1 rounded-lg flex justify-center  items-center w-10 h-10">
        <img className="h-5" src={imgSrc} alt="feature  image" />
      </div>
      <h3 className="text-white font-normal my-2">{title}</h3>
      <p className="small-title">{description}</p>
    </div>
  );
};

export default FeatureCard;
