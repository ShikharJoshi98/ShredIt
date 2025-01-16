import React, { useState } from 'react'
import Button from './Button';
import ProductButton from './ProductButton';
import { useNavigate } from 'react-router-dom';
import { Scribble } from './Scribble';



const ProductsPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/customizer');
  }

  return (
      <div className="bg-[url('./public/bg-texture.webp')]   h-[820px]  w-full bg-cover  bg-no-repeat flex flex-col items-center justify-center gap-10">
      <div className='flex flex-col gap-8 items-center'>
         <div>
          <h1 className='text-7xl  font-bold tracking-wide  text-[#27272a] mt-12   font-Bowlby'>LATEST DROP</h1>
        </div>
        <div  >
          <p className='font-mono text-lg font-bold'>Grab our freshest designs before they sell out! </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-36 mx-24 place-items-center h-screen">
        <div className='flex  flex-col gap-5 items-center group '>
          <div className='overflow-hidden relative  w-60 place-items-center'>
            <Scribble color={"#ca725c"} className="absolute
             top-0 inset-0 h-full w-full"/>
    <img
      src="/src/public/onimask-skateboard.png"
      
            alt="Onimask Skateboard"
            className='transform-gpu w-[123px] transition-transform duration-500 ease-in-out group-hover:scale-150'
            />
            </div>
           
          <div className='flex flex-col items-center gap-2'>
          <h1 className='text-lg font-Bowlby'>ONI MASK</h1>
            <p className='font-mono font-medium '>$59.99</p>
          </div>
          <ProductButton onClick={ handleClick} />
  </div>
        <div className='flex flex-col gap-6 items-center group'>
          <div className='overflow-hidden relative  w-60 place-items-center'>
          <Scribble color={"#f3547c"} className="absolute
             top-0 inset-0 h-full w-full"/>   
    <img
      src="/src/public//pink-skateboard.png"
      width={123}
            alt="Pink Skateboard"
            className='transform-gpu w-[123px] transition-transform duration-500 ease-in-out group-hover:scale-150'
            />
            </div>
            
          <div className='flex flex-col items-center gap-2'>
          <h1 className='text-lg font-Bowlby'>PINK DROP</h1>
            <p className='font-mono font-medium '>$59.99</p>
          </div>
          <ProductButton onClick={ handleClick}/>
  </div>
        <div className='flex flex-col gap-5 items-center group'>
          <div className='overflow-hidden relative  w-60 place-items-center'>
          <Scribble color={"red"} className="absolute
             top-0 inset-0 h-full w-full"/>
    <img
      src="/src/public//thankyou-skateboard.png"
      width={123}
            alt="Thank You Skateboard"
            className='transform-gpu w-[123px] transition-transform duration-500 ease-in-out group-hover:scale-150'
            />
            </div>
                    <div className='flex flex-col items-center gap-2 '>

          <h1 className='text-lg font-Bowlby'>THANK YOU</h1>
          <p className='font-mono font-medium '>$59.99</p>
          </div>
          <ProductButton onClick={ handleClick}/>
        </div>
        <div className='flex flex-col gap-5 group items-center'>
          <div className='overflow-hidden relative  w-60 place-items-center'>
          <Scribble color={"yellow"} className="absolute
             top-0 inset-0 h-full w-full"/>
    <img
      src="/src/public//yellow-black.png"
      width={123}
            alt="Yellow Black Skateboard"
            className='transform-gpu w-[123px] transition-transform duration-500 ease-in-out group-hover:scale-150'
            />
            </div>
          <div className='flex flex-col items-center  gap-2'>
          <h1 className='text-[16px] font-Bowlby  '>YELLOW & BLACK</h1>
            <p className='font-mono font-medium '>$59.99</p>
          </div>
          <ProductButton onClick={ handleClick}/>
        </div>
</div>

                   
    </div>
  )
}

export default ProductsPage