import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import SideNavbar from './SideNavbar'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(true)


    return (
        <div className='flex-grow-1'>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <SideNavbar isOpen={isOpen} />
            <div className=''><Outlet /></div>
        </div>
    )
}

export default Layout