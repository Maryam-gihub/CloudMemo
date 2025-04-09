import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{ backgroundColor: 'rgb(238, 255, 251)', padding: '20px 0px' }} className='d-flex justify-content-between shadow px-5'>
            <div className=''>
            <Link to={'/about'}/><i className="fa-solid fa-bars"></i>
            </div>
            <div className='position-relative w-100' style={{maxWidth: '500px'}}>
            <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y text-muted ms-3"></i>
            <input type="text" className="form-control ps-5 " placeholder="Search..." />
            </div>
            <div className='d-flex gap-4'>
            <div className=' '><i className="fa-solid fa-gear"></i></div>
            <Link to={'/about'} /><i className="fa-solid fa-user fa-2x"></i>

            </div>
        </div>
            
    )
}

export default Navbar