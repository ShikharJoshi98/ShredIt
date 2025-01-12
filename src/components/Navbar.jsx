import React from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../public/logo';

const Navbar = () => {
  return (
     
      <div className='flex items-center justify-between mx-auto   max-w-[1152px] px-3 py-5 '>
                        <Logo width={155} height={80} color='#692e54' />

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