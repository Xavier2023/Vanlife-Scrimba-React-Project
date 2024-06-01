import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams,Outlet } from 'react-router-dom'
import { getHostVans } from '../../../api'
import { FaArrowLeft } from "react-icons/fa6";
import Spinner from '../../assets/images/spinner.gif'

const HostVanDetails = () => {

  const styles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
}

  const params = useParams() 

  const [hostVan, setHostVan] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
          const data = await getHostVans(params.id)
          setHostVan(data)
      } catch (err) {
          setError(err)
      } finally {
          setLoading(false)
      }
  }

  loadVans()
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

  if (loading) {
    return (
        <div className='loading'>
            <img src={Spinner} alt="" />
        </div>
    )
}

  if (error) {
        return <h1>There was an error: {error.message}</h1>
    }


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