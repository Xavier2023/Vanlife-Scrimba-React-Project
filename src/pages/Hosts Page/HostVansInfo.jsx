import React from 'react'
import { useOutletContext } from 'react-router-dom'



const HostVansInfo = ({ }) => {
    const [hostVan] = useOutletContext()
  return (
    <div>
        <div key={hostVan.id}>
          <p className="host-name"><span>Name:</span> {hostVan.name}</p>
          <p className="host-type"><span>Category:</span> {hostVan.type}</p>
          <p className="host-description"><span>Description:</span> {hostVan.description}</p>
          <p className="host-visibility"><span>Visibility:</span> public</p>
        </div>
    </div>
  )
}

export default HostVansInfo