import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansPhotos = () => {
    const [hostVan] = useOutletContext()
  return (
    <div>
      <img className='van-photo' src={hostVan.imageUrl} key={hostVan.id}/>
    </div>
  )
}

export default HostVansPhotos