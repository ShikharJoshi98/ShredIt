import React, { useEffect, useRef } from 'react'
import Button from './Button'
import { FaCartShopping } from 'react-icons/fa6'
import gsap from 'gsap';


const ParallaxCardsRight = () => {
  const ref = useRef(null);
  useEffect(() => {
    if(ref.current){
    gsap.to(ref.current, {
      y: 10,              
      duration: 1,        
      ease: "power1.inOut", 
      yoyo: true,          
      repeat: -1           
    })};
  }, []);
  return (
      <div className="bg-[#d9f154] sticky top-0 z-10 flex items-center px-10 justify-around bg-[url('./public/bg-texture.webp')] h-[593px]   bg-cover  bg-no-repeat">
          <div className='h-[500px]'>
        <img ref={ref} className='w-[450px] h-[500px] object-contain relative z-20 top-[21px] ' src="/src/public/guy3.png" alt="" />
        <img src="/src/public/skater-background.png" className='w-96  relative z-10 top-[-455px] ' alt="" />
      </div>
      <div className='flex flex-col  gap-12'>
        <h1 className='text-7xl  font-bold tracking-wide  text-[#27272a] font-Bowlby'>FUELING THE <br /> NEXT <br /> GENERATION </h1>
        <div className='w-[422px] text-[#27272a] font-mono text-xl font-bold'>
        <p >We’re committed to supporting young skaters and DIY projects, giving back to the communities that keep skateboarding alive and evolving.</p>
              </div>
              <div>
              <Button
        icon={<FaCartShopping />}
        text="Shop Boards"
        color="#ff7347"
        textcolor="black"
        height={50}
        width={258}
        px={20}
        py={10}
        />
              </div>
        </div>
      
    </div>
  )
}

export default ParallaxCardsRight