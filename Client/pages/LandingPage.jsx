import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ backgroundColor: 'rgb(160,247,229)', }}>
                <div>
                    <ul className='fs-4 gap-3'>
                        <div className=''><i className="fa-solid fa-file-lines me-4"></i> Notes</div>
                        <div className=''><i class="fa-solid fa-folder-plus me-4"></i> Folder</div>
                        <div className=''><i class="fa-regular fa-bell me-4"></i> Remainder</div>
                        <div className=''><i class="fa-regular fa-trash-can me-4"></i> Trash</div>
                        <div className=''><i class="fa-solid fa-box-archive me-4"></i> Archive</div>
                    </ul>

                </div>
                <h1 className='text-center'> My Notes </h1>
            </div>
        </div>
    )
}

export default LandingPage