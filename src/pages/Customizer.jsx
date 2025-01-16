import Wheels from '../components/Wheels'
import DeckCustomizer from '../components/DeckCustomizer'
import React from 'react'
import Trucks from '../components/Trucks'
import Bolts from '../components/Bolts'
import Button from '../components/Button'
import { FaPlus } from "react-icons/fa";


const Customizer = () => {
  return (
    <div className='min-h-screen w-full flex '>
      <div className='bg-[#3a414a] w-full '></div>
      <div className="bg-zinc-900 bg-[url('./public/bg-texture.webp')] bg-contain w-[580px] p-6 ">
      <h1 className='text-5xl text-white font-Bowlby '>BUILD YOUR BOARD</h1>
        <DeckCustomizer />
        <Wheels />
        <Trucks />
        <Bolts />
        <div className='mt-7 place-items-center'>
        <Button
        icon={<FaPlus />
        }
       
        text="Add to Cart"
        color="#cfe651"
        textcolor="black"
        height={50}
        width={295}
        px={20}
        py={10}
          />
          </div>
      </div>
    </div>
  )
}

export default Customizer