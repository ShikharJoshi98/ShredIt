import React from 'react'
import Logo from '../public/Logo'

const Artist = () => {
  return (
    <div className="bg-[url('/artists-image.jpg')] h-[490px] w-full bg-cover bg-center bg-no-repeat">
        <div className='p-14'>
              <Logo width={218} height={112} color='#056de6' />
        </div>
          
    </div>
  )
}

export default Artist
