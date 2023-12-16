import { RingLoader } from "react-spinners";

const override = {
  margin: "0 auto",
};
const LoadingSpinner = () => {
  return <RingLoader color="#ffffff" cssOverride={override} size={27} />;
};

export default LoadingSpinner;
