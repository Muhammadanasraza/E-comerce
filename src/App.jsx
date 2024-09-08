import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './pages/Products'
import Card from './components/Card'
import Productdetail from './pages/Productdetail'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import CantactUs from './pages/cantactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>

         <Route path ="/" element={<Home/>}/>
         <Route path ="/products" element={<Products/>}/>
         <Route path ="/productdetail/:id" element={<Productdetail/>}/>
         <Route path ="/cantactus" element={<CantactUs/>}/>
         <Route path ="*" element={<NotFound/>}/>


        </Routes>
       
      </BrowserRouter>

    </>
  )
}

export default App
