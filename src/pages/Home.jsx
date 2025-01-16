

import ProductsPage from '../components/Products'
import Hero from '../components/Hero'
import React from 'react'
import ParallaxCardsLeft from '../components/ParallaxCardsLeft'
import ParallaxCardsRight from '../components/ParallaxCardsRight'
import VideoCard from '../components/VideoCard'
import Artist from '../components/Artist'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <>
        <Hero />
        <ProductsPage />
      <div className="relative">
       <ParallaxCardsLeft />
        <ParallaxCardsRight />
      </div>
       
        <VideoCard />     
        
      <Artist />
      <Footer/>
      </>
  )
}

export default Home