
import { Link } from "react-router-dom";
import Card from "./Card";
import { motion } from "framer-motion";
const MenuList = ({menuItems}) => {
  return (
       <Card >
         <motion.ul className="lg:flex p-3 z-50"          exit={{ opacity: 0 }}
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
         
          </motion.ul>
       </Card>
  )
}

export default MenuList