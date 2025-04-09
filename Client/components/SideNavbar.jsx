import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SIdeNavbar = () => {
    return (
        <div className='col-2 px-5 border border-2 border-dark' style={{ height: '89vh' }}>
            <ul className='fs-4 gap-3 '>
                <Link to={'/'} > <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-solid fa-file-lines me-4"></i> Notes</button></Link>
                <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-solid fa-folder-plus me-4"></i> Folder</button>
                <Link to={'/remind'} > <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-regular fa-bell me-4"></i> Reminder</button></Link>
                <Link to={'/trash'} > <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-regular fa-trash-can me-4"></i> Trash</button></Link>
                <Link to={'/archive'} > <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-solid fa-box-archive me-4"></i> Archive</button></Link>

            </ul>
        </div>
    )
}

export default SIdeNavbar