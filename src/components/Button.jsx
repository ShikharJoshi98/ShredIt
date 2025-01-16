import React from 'react'

const Button = ({icon,onClick,text,color,textcolor,height,width,px,py}) => {
    return (
      <div className='z-20' >
        <button
          onClick={onClick}
      style={{
        backgroundColor: color, 
        color: textcolor,        
        height: `${height}px`,  
        width: `${width}px`,    
        padding: `${py}px ${px}px`, 
          }}
          
      className="border-2 clip-torn-paper cursor-pointer border-black rounded-xl flex  items-center justify-center gap-4 hover:shadow-none shadow-gray-700 shadow-md   "
    >
     <div>{icon}</div>  | <div className={`font-mono font-extrabold text-xl  `}>{text}</div> 
    </button>
      </div>
  )
}

export default Button