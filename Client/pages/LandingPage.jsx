import React from 'react'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'

const LandingPage = () => {
const add =()=>{
    note.style.display = 'none'
    note2.style.display = 'none'

}
    return (
        <div className='w-100'>
            <Navbar />
            <div className='d-flex mt-2 gap-2'>
                <SIdeNavbar />
                <div className='col-9 p-4'>
                    <div className='d-flex mx-auto justify-content-center gap-2'>
                        <input type="text" className='col-lg-6 py-lg-2 px-lg-4 px-3 rounded-3 col-10 border border-dark shadow'/>
                        <button className = 'btn shadow' onClick = {add} id = 'plus' style = {{backgroundColor: 'black'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                        </button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" id = 'note' style = {{display : 'block'}} fill="currentColor" className="bi bi-plus-lg text-secondary text-opacity-75" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <p className='text-center fw-bold fs-4 text-secondary text-opacity-50' style = {{display : 'block'}} id = 'note2'>Create a folder.......</p>
                </div>
            </div>
        </div>

    )
}

export default LandingPage