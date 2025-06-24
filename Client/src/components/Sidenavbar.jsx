import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const SideNavbar = () => {
<<<<<<< HEAD:Client/components/SideNavbar.jsx

    return (
        <div className="col-lg-2 col-3 px-lg-4 flex flex-wrap position-fixed overflow-y-auto shadow lg:mt-20" style={{ height: '100vh', top: 0, left: 0, zIndex: 1040, background: '#D2FCF3', minWidth: '200px', maxWidth: '260px' }}>
            <div className='fs-4 gap-3'>
                <Link to={'/'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-file-lines me-2"></i> Notes</button></Link> <br />
                <Link to={'/remind'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-regular fa-bell me-2"></i> Reminder </button></Link> <br />
                <Link to={'/trash'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-regular fa-trash-can me-2"></i> Trash </button></Link> <br />
                <Link to={'/archive'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-box-archive me-2"></i>Archive</button></Link>
            </div>
        </div>
=======
    if (!isOpen) return null;


    return (
            <div className='fs-4 gap-3 '>
                <Link to={'/'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' ><i className="fa-solid fa-file-lines me-4"></i>  Notes</button></Link>
                <Link to={'/remind'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' ><i className="fa-regular fa-bell me-4"></i> Reminder </button></Link>
                <Link to={'/trash'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' ><i className="fa-regular fa-trash-can me-4"></i> Trash </button></Link>
                <Link to={'/archive'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' ><i className="fa-solid fa-box-archive me-4"></i>Archive</button></Link>
            </div>
        
>>>>>>> a476f2cea82082ee0321aceb43b1f5e59399505d:Client/src/components/Sidenavbar.jsx
    )
}

export default SideNavbar