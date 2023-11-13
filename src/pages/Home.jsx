import Navbar from "../componenet/Home/Navbar";
import Hero from "../componenet/Home/Hero";
import Features from "../componenet/Home/Features";
import Pricing from "../ui/Pricing";
import WhatWeProvide from "../componenet/Home/WhatWeProvide";
import Footer from "../componenet/Home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhatWeProvide />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
