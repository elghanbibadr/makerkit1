import CtaCard from "./CtaCard";
import auth from "../../assets/auth.svg";
import multitenancy from "../../assets/multitenancy.svg";
import teamManagment from "../../assets/teamManagment.svg";
import uitheme from "../../assets/uithemes.svg";
import uicomponenet from "../../assets/uicomponenet.svg";
import blogdoc from "../../assets/blog&doc.svg";
import FeatureCard from "../../ui/FeatureCard";

const featuresArray = [
  {
    imgSrc: auth,
    title: "Authentication",
    description: "Secure and Easy-to-Use Authentication for Your SaaS Website",
  },
  {
    imgSrc: multitenancy,
    title: "Multi-Tenancy",
    description:
      "Powerful Multi-Tenancy Features for Maximum Flexibility and Efficiency",
  },
  {
    imgSrc: teamManagment,
    title: "Team-Management",
    description: "Effortlessly Manage and Organize Your Team Members",
  },
  {
    imgSrc: uitheme,
    title: "UI Themes",
    description: "Customizable UI Themes to Match Your Brand and Style",
  },
  {
    imgSrc: uicomponenet,
    title: "UI Components",
    description: "Pre-built UI Components to Speed Up Your Development",
  },
  {
    imgSrc: blogdoc,
    title: "Blog and Documentation",
    description: "Pre-built Blog and Documentation Pages to Help Your Users",
  },
];

const Features = () => {
  return (
    <div className="mt-24 text-center">
      <CtaCard>A modern, scalable, and secure SaaS Starter Kit</CtaCard>
      <h2 className="text-white"> The best tool in the space</h2>
      <h3 className="gradient-text my-4">
        Unbeatable Features and Benefits for Your SaaS Business
      </h3>
      <div className="mx-auto sm:w-1/2  text-left lg:grid lg:grid-cols-3 lg:w-auto lg:gap-10">
        {featuresArray.map(({ imgSrc, title, description }, index) => (
          <FeatureCard
            key={index}
            imgSrc={imgSrc}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
