import { color } from 'framer-motion';
import React, { useState } from 'react'

const Bolts = ({sampleBolt,setSampleBolt}) => {
   const [Bolt, setBolt] = useState("Black");
      const images = [
        { name: "black",color:"black" },
        { name: "Steel",color:"#4682B4" },
        { name: "asphalt",color:"#34495E" },
        { name: "gold",color:"#FFD700" },
         {name: "silver",color:"silver"},
        { name: "red",color:"red" },
        { name: "blue",color:"blue"},
        {name: "lime",color:"#00FF00" },
          { name: "yellow",color:"yellow" },
          {name: "rasberry",color:"#FF5470" },
          { name: "pink",color:"pink"}
        ];
        
      function handleClick(name,color) {
        setSampleBolt(color);
            setBolt(name);
        }
    
      return (
        <div>
          <div className="flex mt-9 items-center gap-3">
            <h1 className="text-2xl text-white font-extrabold font-mono">BOLTS</h1>
                  <h1 className="text-2xl text-slate-600 font-mono "> | </h1>
                  <h1 className="text-lg text-slate-400 font-bold font-mono">{ Bolt}</h1>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {images.map((image, idx) => (
              <button
                    key={idx}
                    style={{backgroundColor:`${image.color}`}}
                    className={`w-10 h-10 rounded-full overflow-hidden border-2 transition duration-300 ${
                        Bolt === image.name ? "border-white" : "border-slate-500"
                      }`}   
                    onClick={()=>(handleClick(image.name,image.color))}
              >
               
              </button>
            ))}
          </div>
        </div>
      );
}

export default Bolts