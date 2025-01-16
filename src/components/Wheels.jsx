import React, { useState } from 'react'

const Wheels = () => {
  const [Wheel, setWheel] = useState("Black");
    const images = [
      { name: "Black", url: "/src/assets/Wheel/wheel-black.png" },
      { name: "Blue", url: "/src/assets/Wheel/wheel-blue.png" },
      { name: "Cream", url: "/src/assets/Wheel/wheel-cream.png" },
      { name: "Green", url: "/src/assets/Wheel/wheel-green.png" },
      { name: "Navy", url: "/src/assets/Wheel/wheel-navy.png" },
      { name: "Pink", url: "/src/assets/Wheel/wheel-pink.png" },
      { name: "Purple", url: "/src/assets/Wheel/wheel-purple.png" },
      { name: "Red", url: "/src/assets/Wheel/wheel-red.png" },
      { name: "Yellow", url: "/src/assets/Wheel/wheel-yellow.png" }
      ];
      
    function handleClick(name) {
          
          setWheel(name);
      }
  
    return (
      <div>
        <div className="flex mt-9 items-center gap-3">
          <h1 className="text-2xl text-white font-extrabold font-mono">WHEELS</h1>
                <h1 className="text-2xl text-slate-600 font-mono "> | </h1>
                <h1 className="text-lg text-slate-400 font-bold font-mono">{ Wheel}</h1>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              
              className={`w-12 h-12  rounded-full overflow-hidden border-2 transition duration-300 ${
                Wheel === image.name ? "border-white" : "border-slate-500"
              }`}    
                  onClick={()=>(handleClick(image.name))}
            >
              <img
                src={image.url}
                alt={image.name}
                
              />
            </button>
          ))}
        </div>
      </div>
    );
}

export default Wheels