import React from 'react'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'

const Reminder = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex mt-4 gap-5'>
                <SIdeNavbar />
                <div className='border border-dark border-3 col-9 p-4'>
                    <h1>REMIND ME</h1>
                </div>
            </div>
        </div>
    )
}

export default Reminder