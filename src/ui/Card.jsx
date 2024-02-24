
const Card = ({children}) => {
  return (
    <div className="shadow-pinkBoxShadow  text-white border border-gray-50 border-opacity-10 py-4 p-2 absolute top-14 -right-3 rounded-md">
    {children}
    </div>

  )
}

export default Card