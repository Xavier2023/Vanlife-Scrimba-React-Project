import React from 'react'
import HostHeader from './Header Component/HostHeader'
import { Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
        <HostHeader />
        <Outlet />
    </>
  )
}

export default HostLayout