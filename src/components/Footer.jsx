import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const Footer = () => {
  return (
    <div className="bg-[url('./public/bg-texture.webp')] bg-[#18181b] overflow-hidden h-44 w-full bg-cover bg-no-repeat">
      <h1 className='text-white font-mono text-xl text-center mt-12 '>Created By Shikhar Joshi</h1>
      <div className='mt-7 flex items-center text-white justify-center gap-8 text-2xl'>
          <TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://www.linkedin.com/in/shikhar-joshi11/"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  ><FaLinkedin/></a>
              </TooltipTrigger>
    <TooltipContent>
               LinkedIn     
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://github.com/ShikharJoshi98"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Github'
                  ><FaGithub/></a>
              </TooltipTrigger>
    <TooltipContent>
               GitHub     
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://www.instagram.com/shikharjoshi11/"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  ><FaInstagram/></a>
              </TooltipTrigger>
    <TooltipContent>
               Instagram    
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

      </div>        
    </div>
  )
}

export default Footer