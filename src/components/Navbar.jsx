import React from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
      <div className='flex items-center justify-between mx-auto  max-w-[1152px] px-3 py-5 bg-[#eac6dd] '>
          <h1 className='text-4xl font-Rubik font-extrabold text-[#692e54]'>ShredIt</h1>
          <ul className='flex list-none gap-24 font-mono text-xl font-semibold'>
              <li >Customizer</li>
              <li>About</li>              
          </ul>
          <Button
        icon={<FaCartShopping />}
        text="Cart"
        color="#692e54"
        textcolor="white"
        height={50}
        width={135}
        px={20}
        py={10}
      />    </div>
  )
}

export default Navbar