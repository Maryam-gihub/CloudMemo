import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'

const LandingPage = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='d-flex mt-4 gap-5'>
                <SIdeNavbar/>
                <div className='border border-dark border-3 col-9 p-4'>
                    <h1>My Notes</h1>
                </div>
            </div>
        </div>
    )
}

export default LandingPage