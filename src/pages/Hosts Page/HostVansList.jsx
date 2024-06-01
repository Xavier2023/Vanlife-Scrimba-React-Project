import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHostVans } from '../../../api'
import Spinner from '../../assets/images/spinner.gif'

const HostVansList = () => {
  const [hostVans, setHostVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
          const data = await getHostVans()
          setHostVans(data)
      } catch (err) {
          setError(err)
      } finally {
          setLoading(false)
      }
    }
    loadVans()
  }, [])

  const hostVansElement = hostVans.map((hostVan) => (
    <Link 
      to={hostVan.id} 
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
    <div className='host-vans-container'>
      <h1>Your listed vans</h1>
      {hostVansElement}
    </div>
  )
}

export default HostVansList