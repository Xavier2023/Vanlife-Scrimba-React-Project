import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans Page/Vans'
import VanDetail from './pages/Vans Page/VanDetail'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Hosts Page/Dashboard'
import Income from './pages/Hosts Page/Income'
import Reviews from './pages/Hosts Page/Reviews'

import '../server'
import './App.css'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail/>} />

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
