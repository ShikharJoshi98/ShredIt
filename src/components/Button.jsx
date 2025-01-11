import React from 'react'

const Button = ({icon,text,color,textcolor,height,width,px,py}) => {
    console.log(height, width, px, py);
    return (
      <div >
         <button
      style={{
        backgroundColor: color, // Dynamic background color
        color: textcolor,       // Dynamic text color
        height: `${height}px`,  // Dynamic height
        width: `${width}px`,    // Dynamic width
        padding: `${py}px ${px}px`, // Dynamic padding
      }}
      className="border-2 border-black rounded-xl flex  items-center justify-center gap-4 hover:shadow-none shadow-slate-900 shadow-sm   "
    >
     <div>{icon}</div>  | <div className='font-mono font-bold text-lg'>{text}</div> 
    </button>
      </div>
  )
}

export default Button