import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansPricing = () => {
    const [hostVan] = useOutletContext()
  return (
    <div>
        {hostVan.map((van) => (
            <p className='price' key={van.id}><span>${van.price}.00</span>/day</p>
        ))}
    </div>
  )
}

export default HostVansPricing