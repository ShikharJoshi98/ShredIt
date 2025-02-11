import React from 'react'
import Button from './Button'
import { FiLogIn } from "react-icons/fi";
import Logo from '../public/logo';
import { useNavigate } from 'react-router-dom';
import Skateboard from '../public/Skateboard'

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/customizer");
  }
  
  return (
     
      <div className='flex items-center justify-between mx-auto   max-w-[1152px] px-3 py-5 '>
                        <Logo width={155} height={80} color='#692e54' />

          <ul className='flex list-none gap-14 font-mono text-xl font-semibold z-20'>
              <li onClick={handleClick} className='cursor-pointer hover:underline' >Customizer</li>
              <li  className='cursor-pointer hover:underline'>About</li>              
      </ul>
        
         
        
    
    </div>
      
  )
}

export default Navbar