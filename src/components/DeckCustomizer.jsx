import React, { useState } from 'react';

const DeckCustomizer = () => {
    const [Deck, setDeck] = useState("Yellow & Black");
  const images = [
    { name: "Yellow & Black", url: "/src/assets/deckIcon/YellowBlack.png" },
    { name: "Black & Yellow", url: "/src/assets/deckIcon/BlackYellow.png" },
    { name: "Green and Navy", url: "/src/assets/deckIcon/GreenNavy.png" },
    { name: "Gray the Black", url: "/src/assets/deckIcon/GrayBlack.png" },
    { name: "Grid Streaks", url: "/src/assets/deckIcon/GridStreaks.png" },
    { name: "Onimask", url: "/src/assets/deckIcon/Onimask.png" },
    { name: "Pink Swirl", url: "/src/assets/deckIcon/PinkSwirl.png" },
    { name: "Red and Black", url: "/src/assets/deckIcon/RedBlack.png" },
    { name: "Red and White", url: "/src/assets/deckIcon/RedWhite.png" },
    { name: "Thank You", url: "/src/assets/deckIcon/ThankYou.png" },
    ];
    
    function handleClick(name) {
        setDeck(name);
    }

  return (
    <div>
      <div className="flex mt-9 items-center gap-3">
        <h1 className="text-2xl text-white font-extrabold font-mono">DECK</h1>
              <h1 className="text-2xl text-slate-600 font-mono "> | </h1>
              <h1 className="text-lg text-slate-400 font-bold font-mono">{ Deck}</h1>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {images.map((image, idx) => (
          <button
            key={idx}
            className={`w-12 h-12 rounded-full overflow-hidden border-2 transition duration-300 ${
              Deck === image.name ? "border-white" : "border-slate-500"
            }`}                onClick={()=>handleClick(image.name)}
          >
            <img
              src={image.url}
              alt={image.name}
              className="w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeckCustomizer;
