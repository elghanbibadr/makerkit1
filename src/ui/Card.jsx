import { motion } from "framer-motion"


const Card = ({children,className}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 15 }} 
    animate={{ opacity: 1, y: 0 }}   
    transition={{ duration: 0.6 }}
    className={`shadow-pinkBoxShadow  text-white border border-gray-50 border-opacity-10 py-4 p-2 absolute top-14 -right-3 bg-secondary rounded-md ${className}`}>
    {children}
    </motion.div>

  )
}

export default Card