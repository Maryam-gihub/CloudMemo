import React from 'react'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'


const Archived = () => {
  return (
    <div>

      <div className='d-flex gap-1'>
        <SIdeNavbar />
        <div className='col-lg-10 col-11 ps-25 pt-4 mx-auto'>
          <div className='d-flex'>
            <input type="text" className='col-lg-6 py-lg-2 px-lg-4 px-3 rounded-3 col-12 mx-auto border border-dark shadow' />
          </div>
          <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-archive text-secondary text-opacity-50" viewBox="0 0 16 16">
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <p className='text-center'>Your archived notes appears here </p>
        </div>
      </div>
    </div>
  )
}

export default Archived