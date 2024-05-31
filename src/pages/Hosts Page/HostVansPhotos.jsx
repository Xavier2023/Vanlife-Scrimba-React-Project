import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansPhotos = () => {
    const [hostVan] = useOutletContext()
  return (
    <div>
        {hostVan.map((van) => (
            <img className='van-photo' src={van.imageUrl} key={van.id}/>
        ))} 
    </div>
  )
}

export default HostVansPhotos