import { useState } from 'react'
import Nav from './Nav'
import Home from './components/Home/Home'
import CurvedTxt from './components/CurvedTxt'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
// import Models from './components/Models'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop/>
      <Nav/>
       <Home/>
      <Routes>
        
      </Routes>
      
      
      <Footer/> 
      
      
    </>
  )
}

export default App
