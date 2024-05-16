import { LinksList } from "./Links-List";
import { LogoAndCopyright } from "./LogoAndCopyright";
import { SubscribeForm } from "./SubscribeForm";

const Footer = () => {
  return (
    <footer className="mt-32 mb-10 text-white container mx-auto grid grid-cols-1 md:grid-cols-7 gap-8">
      <LogoAndCopyright />
      <LinksList />
      <SubscribeForm />
    </footer>
  );
};

export default Footer;
