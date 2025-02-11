import React from 'react'
import Logo from '../public/Logo'
import artistsImage from '../assets/artists-image.jpg';

const Artist = () => {
  return (
    <div className="h-[490px] w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${artistsImage})` }}>
        <div className='p-14'>
              <Logo width={218} height={112} color='#056de6' />
        </div>
          
    </div>
  )
}

export default Artist
