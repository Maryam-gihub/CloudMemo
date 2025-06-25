import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const SideNavbar = () => {

    return (
        <div className=" px-lg-4 flex flex-wrap position-fixed overflow-y-auto shadow mt-15 lg:mt-19" style={{ height: '100vh', top: 0, left: 0, zIndex: 1, background: '#D2FCF3', minWidth: '100px', maxWidth: '260px' }}>
            <div className='fs-4 gap-3'>
                <Link to={'/'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-file-lines me-2"></i> Notes</button></Link> <br />
                <Link to={'/remind'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-regular fa-bell me-2"></i> Reminder </button></Link> <br />
                <Link to={'/trash'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-regular fa-trash-can me-2"></i> Trash </button></Link> <br />
                <Link to={'/archive'} ><button type="button" className='mt-2 btn fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-box-archive me-2"></i>Archive</button></Link>
            </div>
        </div>
    )
}

export default SideNavbar