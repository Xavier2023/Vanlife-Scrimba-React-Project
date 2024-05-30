import React from 'react'
import { useOutletContext } from 'react-router-dom'



const HostVansInfo = ({ }) => {
    const [hostVan] = useOutletContext()
  return (
    <div>
        {hostVan.map((van) => (
            <div key={van.id}>
                <p className="host-name"><span>Name:</span> {van.name}</p>
                <p className="host-type"><span>Category:</span> {van.type}</p>
                <p className="host-description"><span>Description:</span> {van.description}</p>
                <p className="host-visibility"><span>Visibility:</span> Public</p>
            </div>
        ))}
    </div>
  )
}

export default HostVansInfo