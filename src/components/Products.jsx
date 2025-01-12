import React from 'react'

const ProductsPage = () => {
  return (
      <div className="bg-[url('./public/bg-texture.webp')]   h-[820px]  w-full bg-cover  bg-no-repeat flex flex-col items-center justify-center gap-10">
      <div className='flex flex-col gap-8 items-center'>
      <h1 className='text-7xl  font-bold tracking-wide  text-[#27272a] mt-12   font-Bowlby'>LATEST DROP</h1>
        <p className='font-mono text-lg font-bold'>Grab our freshest designs before they sell out! </p>
        </div>
        <div className="grid grid-cols-4 gap-36 mx-24 place-items-center h-screen">
  <div className='flex flex-col gap-5 items-center'>
    <img
      src="/src/public/onimask-skateboard.png"
      width={123}
      alt="Onimask Skateboard"
          />
          <div className='flex flex-col items-center gap-2'>
          <h1 className='text-lg font-Bowlby'>ONI MASK</h1>
            <p className='font-mono font-medium '>$59.99</p>
            </div>
  </div>
  <div className='flex flex-col gap-6 items-center'>
    <img
      src="/src/public//pink-skateboard.png"
      width={123}
      alt="Pink Skateboard"
          />
          <div className='flex flex-col items-center gap-2'>
          <h1 className='text-lg font-Bowlby'>PINK DROP</h1>
            <p className='font-mono font-medium '>$59.99</p>
          </div>
  </div>
  <div className='flex flex-col gap-5 items-center'>
    <img
      src="/src/public//thankyou-skateboard.png"
      width={123}
      alt="Thank You Skateboard"
          />
                    <div className='flex flex-col items-center gap-2'>

          <h1 className='text-lg font-Bowlby'>THANK YOU</h1>
          <p className='font-mono font-medium '>$59.99</p>
            </div>
  </div>
        <div className='flex flex-col gap-5 items-center'>
          
    <img
      src="/src/public//yellow-black.png"
      width={123}
      alt="Yellow Black Skateboard"
          />
          <div className='flex flex-col items-center gap-2'>
          <h1 className='text-lg font-Bowlby whitespace-nowrap '>YELLOW & BLACK</h1>
            <p className='font-mono font-medium '>$59.99</p>
            </div>
  </div>
</div>

                   
    </div>
  )
}

export default ProductsPage