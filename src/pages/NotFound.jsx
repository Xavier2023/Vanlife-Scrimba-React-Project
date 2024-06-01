import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-not-found'>
        <h1><span>404</span> Page not found</h1>
        <h2>Sorry the page you were looking for was not found.</h2>
        <Link className='link-button'>Return to home</Link>
    </div>
  )
}

export default NotFound