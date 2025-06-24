import React from 'react'
<<<<<<< HEAD:Client/pages/Note.jsx
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SIdeNavbar'

=======
import Navbar from './components/Navbar'
import SideNavbar from './SideNavbar'
>>>>>>> a476f2cea82082ee0321aceb43b1f5e59399505d:Client/src/pages/Note.jsx

const note = () => {
    return (
        <div>
            <div className='w-100'>
            <Navbar/>
<<<<<<< HEAD:Client/pages/Note.jsx
                <div className='d-flex lg:mt-20 gap-2'>
=======
                <div className='d-flex  gap-2'>
>>>>>>> a476f2cea82082ee0321aceb43b1f5e59399505d:Client/src/pages/Note.jsx
                    <SideNavbar/>
                    <div className='col-lg-7 mx-auto col-8 pt-4'>
                        <textarea name="" id="" cols="30" className='w-100 rounded-5 p-4 overflow-y-auto form-control border-dark border-3 fs-6' style={{ height: '80vh' }}></textarea>
                        <div className='d-flex justify-content-between mt-2'>
                            <button className='btn px-lg-5 px-3 fs-6 py-lg-2 py-1 fw-bold' style={{ backgroundColor: 'rgb(23, 253, 199)' }}>Back</button>
                            <button className='btn px-lg-5 px-3 fs-6 py-lg-2 py-1 fw-bold' style={{ backgroundColor: 'rgb(23, 253, 199)' }}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default note