import { RingLoader } from "react-spinners";

const override = {
  margin: "0 auto",
};
const LoadingSpinner = (isloading) => {
  return (
    <RingLoader
      color="#ffffff"
      loading={isloading}
      cssOverride={override}
      size={27}
    />
  );
};

export default LoadingSpinner;
