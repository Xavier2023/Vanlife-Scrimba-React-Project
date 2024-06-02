import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansPricing = () => {
    const [hostVan] = useOutletContext()
  return (
    <div>
      <p className='price' key={hostVan.id}><span>${hostVan.price}.00</span>/day</p>
    </div>
  )
}

export default HostVansPricing