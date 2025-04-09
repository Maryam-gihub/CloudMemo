import React from 'react'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'

const Trash = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex mt-4 gap-5'>
                <SIdeNavbar />
                <div className='border border-dark border-3 col-9 p-4'>
                    <h1>Notes in Trash will be deleted after 7 days automatically</h1>
                </div>
            </div>
        </div>
    )
}

export default Trash