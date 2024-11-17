import React from 'react'

const ProfilItemCard = ({title,desc,children}) => {
  return (
    <div className='p-4 border my-3 border-[#18202a] rounded-md'>
        <h3 className='text-white text-[1rem] font-semibold'>{title}</h3>
         <p className='text-sm text-[#9ca3af] mb-5'>{desc}</p>
         {children}
    </div>
  )
}

export default ProfilItemCard