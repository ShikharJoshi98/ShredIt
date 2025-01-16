import React from 'react'

const ProductButton = ({onClick}) => {
  return (
    <button onClick={onClick} className='relative z-10 top-[-344px]   opacity-0 transition-opacity shadow-lg duration-200 group-hover:opacity-100 bg-[#cfe651] p-1 rounded-lg border-white border-2'>Customize</button>
  )
}

export default ProductButton