import CtaCard from "../../componenet/Home/CtaCard";
import { Link } from "react-router-dom";
import { ButtonTransparent } from "../../ui/Button-transparent";
import arrow from "../../assets/arrow2.svg"
const EmailChangeConfirmation = () => {
  return (
    <div className="h-[44vh] mt-10 flex flex-col justify-center items-center">
      <CtaCard className="py-6 mt-10 flex justify-center items-center rounded-lg">
        Email Successfully changed 🎉
      </CtaCard>
      <Link to="/dashboard">
        <ButtonTransparent text="Go to your dashboard" icon={arrow} />
      </Link>
    </div>
  );
};

export default EmailChangeConfirmation;
