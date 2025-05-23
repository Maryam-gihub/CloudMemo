import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const SIdeNavbar = () => {

    return (
        // <div className= 'position-re'>
        <div className='col-lg-2 col-3 px-lg-5  flex flex-wrap position-relative overflow-y-auto shadow' style={{ height: '101vh'}}>
            <div className='fs-4 gap-3 '>
                <Link to={'/'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' ><i className="fa-solid fa-file-lines me-4"></i>  Notes</button></Link>
                <Link to={'/remind'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' ><i className="fa-regular fa-bell me-4"></i> Reminder </button></Link>
                <Link to={'/trash'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' ><i className="fa-regular fa-trash-can me-4"></i> Trash </button></Link>
                <Link to={'/archive'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' ><i className="fa-solid fa-box-archive me-4"></i>Archive</button></Link>
            </div>
        </div>
        // </div>
    )
}

export default SIdeNavbar