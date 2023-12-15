import { Outlet } from "react-router-dom";
import Footer from "../../componenet/Home/Footer";
import Navbar from "../../componenet/Home/Navbar";
const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePageLayout;
