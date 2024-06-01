import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}
  
  return (
    <>
      <header>
        <NavLink className='site-logo' to="/">#VANLIFE</NavLink>
        <nav>
          <NavLink className={({ isActive }) => isActive? 'active-link' : null} to="/host">Host</NavLink>
          <NavLink className={({ isActive }) => isActive? 'active-link' : null}  to="/about">About</NavLink>
          <NavLink className={({ isActive }) => isActive? 'active-link' : null}  to="/vans">Vans</NavLink>
        </nav>
        <NavLink to="login" className="login-link">
          <FaCircleUser
              className="login-icon"
          />
        </NavLink>
        {/* <button onClick={fakeLogOut}>X</button> */}
      </header>
    </>
  )
}

export default Header