import React from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'


const Note = () => {
  return (
        <div>
            <div className='w-100'>
            <Navbar/>
                <div className='d-flex mt-15 lg:mt-20 gap-2'>
                    <SideNavbar/>
                    <div className='col-lg-7 ms-35 lg:mx-auto col-7 pt-4'>
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

export default Note