import React from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'


const Trash = () => {
    return (
        <div>
            <Navbar/>
            <div className='d-flex gap-2 mt-15 lg:mt-20'>
                <SideNavbar />
                <div className='col-lg-10 col-7 ms-35 pt-4 lg:mx-auto '>
                    <p className='text-center text-secondary fst-italic text-lg lg:text-2xl font-medium'>Trash will be deleted after 7 days automatically</p>
                    <div className='d-flex justify-content-center align-items-center' style={{height: '60vh'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-trash3 text-secondary text-opacity-50" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </div>
                        <p className='text-center'>No Notes in trash... </p>
                </div>
            </div>
        </div>
    )
}

export default Trash