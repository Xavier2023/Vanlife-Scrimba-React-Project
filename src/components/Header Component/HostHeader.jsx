import React from 'react'
import { Link } from 'react-router-dom'

const HostHeader = () => {
  return (
    <>
        <nav className='host-nav'>
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/vans">Vans</Link>
          <Link to="/host/reviews">Reviews</Link>
        </nav>
    </>
  )
}

export default HostHeader