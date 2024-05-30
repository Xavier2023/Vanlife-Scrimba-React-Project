import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header Component/Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout