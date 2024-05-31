import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";

const VanDetail = () => {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        const getVan = async () => {
            const res = await fetch(`/api/vans/${params.id}`)
            const data = await res.json()
            setVan(data.vans)
        }
        getVan()
    }, [params.id])
    
  return (
    <div className="van-detail-container">
        <Link to='..' relative='path' className='host-link'>
            <FaArrowLeft className='icon'/>
            <p>Back to all vans</p>
        </Link>
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
  )
}

export default VanDetail