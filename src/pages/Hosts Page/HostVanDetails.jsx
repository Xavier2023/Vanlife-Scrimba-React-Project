import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams,Outlet } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";

const HostVanDetails = () => {

  const styles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
}

  const params = useParams() 

  const [hostVan, setHostVan] = useState([])

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setHostVan(data.vans)
      })
  }, [])



  const hostVanElement = hostVan.map((van) => (
    <div key={van.id} className='host-van-page'>
      <div className='host-van-info'>
        <img src={van.imageUrl} />
        <div className='host-van-detail'>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p><span>${van.price}</span>/day</p>
        </div>
      </div>
      <nav className='host-nav-list'>
          <NavLink style={({ isActive }) => isActive? styles : null } to='.'end  >Details</NavLink>
          <NavLink style={({ isActive }) => isActive? styles : null } to='./pricing' >Pricing</NavLink>
          <NavLink style={({ isActive }) => isActive? styles : null } to="./photos">Photo(s)</NavLink>
      </nav>
      <Outlet context={[hostVan]} />
    </div>
  ))


  return (
    <div className='host-van-info-container'>
      <Link to='..' relative='path' className='host-link'>
        <FaArrowLeft className='icon'/>
        <p>Back to all vans</p>
      </Link>
      {hostVanElement}
    </div>
  )
}

export default HostVanDetails