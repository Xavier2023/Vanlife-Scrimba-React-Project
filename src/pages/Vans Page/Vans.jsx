import React, { useEffect, useState } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'

const Vans = () => {
    const [vans, setVans] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        const getVans = async () => {
            const res = await fetch("/api/vans")
            const data = await res.json()
            setVans(data.vans)
        }
        getVans()
    }, [])

    // function genNewSearchParamString(key, value) {
    //     const sp = new URLSearchParams(searchParams)
    //     if (value === null) {
    //       sp.delete(key)
    //     } else {
    //       sp.set(key, value)
    //     }
    //     return `?${sp.toString()}`
    //   }

    const handleFilter = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
      
    const displayVans = typeFilter? vans.filter(van => van.type === typeFilter ) : vans

    const vanElements = displayVans.map((van) => (
        <Link key={van.id} to={van.id} state={{ search: searchParams.toString(), type: typeFilter }}>
            <div className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>
    ))
  return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className='van-list-filter-buttons'>
            <button className={`van-type ${typeFilter === 'simple'? 'selected' : null} simple`} onClick={() => handleFilter('type', 'simple')}>Simple</button>
            <button className={`van-type ${typeFilter === 'luxury'? 'selected' : null} luxury`} onClick={() => handleFilter('type', 'luxury')}>Luxury</button>
            <button className={`van-type ${typeFilter === 'rugged'? 'selected' : null} rugged`} onClick={() => handleFilter('type', 'rugged')}>Rugged</button>
            { typeFilter? <button className='van-type clear-filters' onClick={() => handleFilter('type', null)}>Clear filters</button> : '' }
        </div>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
  )
}

export default Vans