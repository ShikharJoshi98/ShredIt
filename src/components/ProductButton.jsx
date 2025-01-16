import React from 'react'

const ProductButton = ({onClick}) => {
  return (
    <button onClick={onClick} className='relative z-10 top-[-344px]   opacity-0 transition-opacity text-xl font-bold font-mono hover:shadow-none shadow-gray-700 shadow-md duration-200 group-hover:opacity-100 bg-[#cfe651] p-1 rounded-lg border-black border-2'>Customize</button>
  )
}

export default ProductButton