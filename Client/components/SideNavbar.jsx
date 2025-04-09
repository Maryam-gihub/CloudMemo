import React from 'react'
import { useNavigate } from 'react-router-dom'


const SIdeNavbar = () => {
    return (
        <div className='col-2 px-5 border border-2 border-dark' style={{height: '89vh'}}>
            <ul className='fs-4 gap-3 '>
                <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-solid fa-file-lines me-4"></i> Notes</button>
                <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-solid fa-folder-plus me-4"></i> Folder</button>
                <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-regular fa-bell me-4"></i> Remainder</button>
                <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-regular fa-trash-can me-4"></i> Trash</button>
                <button className='mt-2 btn  fw-bold fs-5 '><i className="fa-solid fa-box-archive me-4"></i> Archive</button>
            </ul>
            </div>
    )
}

export default SIdeNavbar