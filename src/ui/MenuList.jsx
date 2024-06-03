
import { Link } from "react-router-dom";
import Card from "./Card";
import { motion } from "framer-motion";
import Button from "./Button";
import PurpleButton from "../ui/PurpleButton"

const MenuList = ({menuItems}) => {
  return (
       <Card >
         <motion.ul className="lg:flex w-[120px] p-3 z-[99999999999] "          exit={{ opacity: 0 }}
 >
                {menuItems.map(({ navLink, href }) => (
                  <Link
                   to={href}
                   className="text-white">
                    <li
                      key={navLink.id}
                      className="p-1 lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-300"
                    >
                        {navLink}
                    </li>
                  </Link>
                ))}
                  <Button className="text-white mx-4 hover:bg-accent1 px-6 py-2 rounded-full">
                  Sign In
                </Button>
                <PurpleButton text="sign up"   />
                {/* </Link> */}
         
          </motion.ul>
       </Card>
  )
}

export default MenuList