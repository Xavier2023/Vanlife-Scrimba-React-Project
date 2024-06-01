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
import HostVansList from './pages/Hosts Page/HostVansList'
import HostVanDetails from './pages/Hosts Page/HostVanDetails'
import HostVansInfo from './pages/Hosts Page/HostVansInfo'
import HostVansPhotos from './pages/Hosts Page/HostVansPhotos'
import HostVansPricing from './pages/Hosts Page/HostVansPricing'
import NotFound from './pages/NotFound'

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
            <Route path='vans' element={<HostVansList/>} />
            <Route path='vans/:id' element={<HostVanDetails/>}>
              <Route index element={<HostVansInfo/>} />
              <Route path='pricing' element={<HostVansPricing/>} />
              <Route path='photos' element={<HostVansPhotos/>} />
            </Route>
            <Route path='reviews' element={<Reviews/>} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
