import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Preview from '../components/Preview';
import DeckCustomizer from '../components/DeckCustomizer';
import Wheels from '../components/Wheels';
import Trucks from '../components/Trucks';
import Bolts from '../components/Bolts';
import Button from '../components/Button';
import { FaPlus } from "react-icons/fa";
import Logo from '../public/Logo';

const Customizer = () => {
  const navigate = useNavigate();

  const [sampleDeck, setSampleDeck] = useState("/src/assets/decks/yellow-and-black.png");
  const [sampleWheel, setSampleWheel] = useState("/src/assets/Wheel/wheel-cream.png");
  const [sampleTruck, setSampleTruck] = useState("black");
  const [sampleBolt, setSampleBolt] = useState("black");


  function handleClick() {
    navigate('/');
  }

  return (
    <div className='min-h-screen w-full flex'>
      <div className='w-full bg-[#3a414a]'>
        <Preview sampleDeck={sampleDeck} sampleWheel={sampleWheel} sampleTruck={sampleTruck} sampleBolt={sampleBolt} />
        <div className='absolute p-5 cursor-pointer z-10 top-0 left-0' onClick={handleClick}>
          <Logo width={93} height={48} color='#e5e7eb' />
        </div>
      </div>
      <div className="bg-zinc-900 bg-[url('./public/bg-texture.webp')] bg-contain w-[580px] p-6">
        <h1 className='text-5xl text-white font-Bowlby'>BUILD YOUR BOARD</h1>
        <DeckCustomizer sampleDeck={sampleDeck} setSampleDeck={setSampleDeck} />
        <Wheels sampleWheel={sampleWheel} setSampleWheel={setSampleWheel} />
        <Trucks sampleTruck={sampleTruck} setSampleTruck={setSampleTruck} />
        <Bolts sampleBolt={sampleTruck} setSampleBolt={setSampleBolt}/>
        <div className='mt-7 place-items-center'>
          <Button
            icon={<FaPlus />}
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
  );
};

export default Customizer;
