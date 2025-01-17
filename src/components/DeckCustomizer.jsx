import React, { useState } from 'react';

const DeckCustomizer = ({ sampleDeck, setSampleDeck }) => {
  const [Deck, setDeck] = useState("Yellow & Black");

  const images = [
    { name: "Yellow & Black", url: "/src/assets/deckIcon/YellowBlack.png", deck: "/src/assets/decks/yellow-and-black.png" },
    { name: "Black & Yellow", url: "/src/assets/deckIcon/BlackYellow.png", deck: "/src/assets/decks/black-and-yellow.png" },
    { name: "Green and Navy", url: "/src/assets/deckIcon/GreenNavy.png", deck: "/src/assets/decks/green-and-navy.png" },
    { name: "Gray and Black", url: "/src/assets/deckIcon/GrayBlack.png", deck: "/src/assets/decks/gray-and-black.png" },
    { name: "Grid Streaks", url: "/src/assets/deckIcon/GridStreaks.png", deck: "/src/assets/decks/grid-streaks.png" },
    { name: "Onimask", url: "/src/assets/deckIcon/Onimask.png", deck: "/src/assets/decks/OniMask.png" },
    { name: "Pink Swirl", url: "/src/assets/deckIcon/PinkSwirl.png", deck: "/src/assets/decks/PinkSwirl.png" },
    { name: "Red and Black", url: "/src/assets/deckIcon/RedBlack.png", deck: "/src/assets/decks/red-and-black.png" },
    { name: "Red and White", url: "/src/assets/deckIcon/RedWhite.png", deck: "/src/assets/decks/red-and-white.png" },
    { name: "Thank You", url: "/src/assets/deckIcon/ThankYou.png", deck: "/src/assets/decks/thank-you-deck.png" },
  ];

  const handleClick = (name, deck) => {
    setDeck(name);
    setSampleDeck(deck);
  };

  return (
    <div>
      <div className="flex mt-9 items-center gap-3">
        <h1 className="text-2xl text-white font-extrabold font-mono">DECK</h1>
        <h1 className="text-2xl text-slate-600 font-mono">|</h1>
        <h1 className="text-lg text-slate-400 font-bold font-mono">{Deck}</h1>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {images.map((image, idx) => (
          <button
            key={idx}
            className={`w-10 h-10 rounded-full overflow-hidden border-2 transition duration-300 ${
              Deck === image.name ? "border-white" : "border-slate-500"
            }`}
            onClick={() => handleClick(image.name, image.deck)}
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
