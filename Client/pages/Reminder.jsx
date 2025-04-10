import React from 'react'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'
import Rightnav from './rightnav'

const Reminder = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex mt-2 gap-2'>
                <SIdeNavbar />
                <div className='col-9 p-4'>
                    <div>
                        <input type="text" className='w-50 form-control mx-auto border border-dark shadow' />
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-bell text-secondary text-opacity-50" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                </svg>
                            </div> 
                            <p className = 'text-center'>Note with Upcoming reminders appear here</p>
                        </div>
                </div>
                <Rightnav/>
            </div>
        </div>
    )
}

export default Reminder