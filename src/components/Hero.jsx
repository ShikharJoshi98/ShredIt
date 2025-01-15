import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Skateboard from '../public/Skateboard'
import InteractiveSkateboard from './InteractiveSkateboard'

const Hero = () => {
  
  return (
    <div className="bg-[#eac6dd] bg-[url('./public/bg-texture.webp')] bg-contain">
      <Navbar/>
      <div className='h-[493px] ' >
        <div className='flex items-center justify-between'>
          <h1 className='text-7xl  font-bold tracking-wide  text-[#27272a] p-16 font-Bowlby'>ESCAPE THE <br /> CUL-DE-SAC</h1>
         
            <InteractiveSkateboard wheeltexture="/src/public/skateboard/wheel-green.png" decktexture="/src/public/skateboard/yellow-and-black.png" boltcolor="green-yellow" truckColor="#555555" constantWheelSpin />
            
        </div>
        <div className='flex z-20 items-center justify-around gap-36 mt-20 '>
          <h1 className='text-2xl font-mono font-extrabold tracking-wide  text-[#27272a] '>Not just a board, <em>your</em> board. Design a board <br /> that's as real as the places you take it.</h1>
          <Button
            icon={<Skateboard />}
           
        text="Build Your Board"
        color="#ff7347"
        textcolor="Black"
        height={72}
        width={295}
        px={24}
        py={16}
        />
       </div>
      </div>

      </div>
  )
}

export default Hero