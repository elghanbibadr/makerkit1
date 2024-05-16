import { Outlet } from "react-router-dom";
import Footer from "../../componenet/Home/footer/Footer";
import Navbar from "../../componenet/Home/Navbar";
import Container from "../../ui/Container";

const HomePageLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default HomePageLayout;
