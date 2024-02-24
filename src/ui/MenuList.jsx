// import Card from "./Card"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import Card from "./Card";
// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 }
//   }
// };
// const variantsli = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 }
//     }
//   },
//   closed: {
//     y: 100,

//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000 }
//     }
//   }
// };

// {menuItems,isOpen}
const MenuList = ({menuItems}) => {
  return (
       <Card >
         <motion.ul className="lg:flex z-50"  >
                {menuItems.map(({ navLink, href }) => (
                  <Link
                   to={href}
                   className="text-white">
                    <motion.li
                    // variants={variantsli}
                      key={navLink.id}
                      className="p-1 lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-300"
                    >
                        {navLink}
                    </motion.li>
                  </Link>
                ))}
         
              </motion.ul>
       </Card>
  )
}

export default MenuList