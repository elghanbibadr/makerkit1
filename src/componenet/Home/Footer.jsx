import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className=" mt-32 mb-10 text-white ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-8">
        {/* Column 1 */}
        <div className="md:col-span-2">
          <img className="mb-6" src={logo} alt="makerkit logo" />
          <p className="  mb-4">Add a short tagline</p>
          <p>© Copyright 2023 Awesomely. All Rights Reserved.</p>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p>Who we are</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        {/* Column 3 */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Product</h2>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Changelog</p>
        </div>

        {/* Column 4 */}
        <div className="">
          <h2 className="text-xl font-bold mb-4">Legal</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>

        {/* Column 5 */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Subscribe</h2>
          <p>Get the latest updates from our team.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="input"
            />
            <button className="bg-darkPink text-white px-4 py-2 mt-2 rounded font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
