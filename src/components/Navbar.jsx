import React from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../public/logo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/customizer");
  }
  
  return (
     
      <div className='flex items-center justify-between mx-auto   max-w-[1152px] px-3 py-5 '>
                        <Logo width={155} height={80} color='#692e54' />

          <ul className='flex list-none gap-24 font-mono text-xl font-semibold z-20'>
              <li onClick={handleClick} className='cursor-pointer hover:underline' >Customizer</li>
              <li  className='cursor-pointer hover:underline'>About</li>              
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
        />
    
    </div>
      
  )
}

export default Navbar