import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HostVansList = () => {
  const [hostVans, setHostVans] = useState([])

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => {
        setHostVans(data.vans)
      })
  }, [])

  const hostVansElement = hostVans.map((hostVan) => (
    <Link 
      to={`/host/vans/${hostVan.id}`} 
      key={hostVan.id}
    >
      <div className='host-van'>
        <img src={hostVan.imageUrl} />
        <div className='host-van-detail'>
          <h3>{hostVan.name}</h3>
          <p>${hostVan.price}/day</p>
        </div>
      </div>
    </Link>
  ))
  return (
    <div className='host-vans-container'>
      <h1>Your listed vans</h1>
      {hostVansElement}
    </div>
  )
}

export default HostVansList