import Artist from "./components/Artist"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ParallaxCardsLeft from "./components/ParallaxCardsLeft"
import ParallaxCardsRight from "./components/ParallaxCardsRight"
import ProductsPage from "./components/Products"
import VideoCard from "./components/VideoCard"



function App() {

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

export default App
