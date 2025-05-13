import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'
import { useState } from 'react'


const Reminder = () => {
    const [remind, setRemind] = useState('')
    
    return (
        <div>
            <Navbar />
            <div className='d-flex gap-2'>
                <SIdeNavbar />
                <div className='col-lg-10 col-11 ps-25 pt-4 mx-auto'>
                    <div className='d-flex mx-auto justify-content-center gap-2'>
                        <input type="text" className='col-lg-6 py-lg-2 px-lg-4 px-3 rounded-3 col-7 border border-dark shadow' onChange = {(e)=>setRemind(e.target.value)}/>
                        <button className='btn shadow'  style={{ backgroundColor: 'black' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
                            <button className='btn '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-plus-lg text-secondary text-opacity-75" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg>
                            </button>
                        </div>
                        <p className='text-center fw-bold fs-4 text-secondary text-opacity-50'>Set a reminder.......</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reminder