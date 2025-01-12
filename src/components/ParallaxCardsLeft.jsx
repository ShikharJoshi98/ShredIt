import React from 'react'

const ParallaxCardsLeft = () => {
  return (
   
    <div className="bg-[#4876ff] sticky top-0 flex items-center px-10 justify-around bg-[url('./public/bg-texture.webp')] h-[593px]   bg-cover  bg-no-repeat">
      <div className='flex flex-col  gap-12'>
        <h1 className='text-7xl  font-bold tracking-wide  text-white font-Bowlby'>NOT JUST A <br /> DECK, IT'S <br /> YOUR <br /> CANVAS</h1>
        <div className='w-[422px] text-white font-mono text-xl font-bold'>
        <p >Each board is a canvas for expression, crafted for those who treat the backstreets as their own art gallery.</p>
        </div>
        </div>
      <div className='h-[500px]'>
        <img className='w-80 h-[500px] object-contain relative z-20 top-[21px] ' src="/src/public/guy1.png" alt="" />
        <img src="/src/public/skater-background.png" className='w-96  relative z-10 top-[-455px] ' alt="" />
      </div>
      </div>
      
  )
}

export default ParallaxCardsLeft