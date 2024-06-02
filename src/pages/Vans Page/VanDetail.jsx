import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { getVan } from '../../../api'
import Spinner from '../../assets/images/spinner.gif'

const VanDetail = () => {
    const params = useParams()
    const { state } = useLocation()

    const location = state?.search || ""
    const type = state?.type || "all"
    
    const [van, setVan] = useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(params.id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [params.id])

    if (loading) {
        return (
            <div className='loading'>
                <img src={Spinner} alt="" />
            </div>
        )
    }

    if (error) {
        return (
            <h1>There was an error {error}</h1>
        )
    }
    
  return (
    <div className="van-detail-container">
        <Link to={`..?${location}`} relative='path' className='host-link'>
            <FaArrowLeft className='icon'/>
            <p>Back to {type} vans</p>
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