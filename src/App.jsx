import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customizer" element={<Customizer />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
