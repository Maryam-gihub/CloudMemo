import React from 'react'
import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const LandingPage = () => {
    const [Folder, setFolder] = useState('')
    const [Container, setContainer] = useState([])
    const add = () => {
        if (Folder === '') {
            alert('Enter your folder name')
        } else {
            lol.style.display = 'none'
            msg.style.display = 'none'
            const push = [...Container, Folder]
            setContainer(push)
            console.log(push);
        }

    }
    return (
        <div className='w-100'>
            <div className='d-flex '>
                <div className='col-lg-8 col-8 ps-5 p-4 mx-auto'>
                    <div className='d-flex mx-auto justify-content-center gap-2'>
                        <input type="text" onChange={(e) => setFolder(e.target.value)} value={Folder} className='col-lg-6 py-lg-2 px-lg-4 px-3 rounded-3 col-10 border border-dark shadow' />
                        <button className='btn shadow' onClick={add} id='plus' style={{ backgroundColor: 'black' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                    <div className='mt-5 gap-lg-5 gap-4 d-flex flex-row flex-wrap justify-content-center'>
                    {Container.map((Folder, index) => (
                            <button className='col-lg-2 col-5 p-lg-5 p-2 border border-dark border-3 text-break' style={{ backgroundColor: 'red' }}>
                            <Link to={'/note'}><p className='bg-light fw-bold px-3 text-dark text-capitalize'>{Folder}</p></Link>
                                {/* <select name="" id="" >
                                    <option value="" className = 'fs-6'>Edit</option>
                                    <option value="" className = 'fs-6'>Delete</option>
                                </select> */}
                            </button>
                    ))}
                    </div>
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh', display: 'block' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"  id = 'lol' fill="currentColor" className="bi bi-plus-lg text-secondary text-opacity-75" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <p className='text-center fw-bold fs-4 text-secondary text-opacity-50' id = 'msg' style = {{display: 'block'}}>Create a folder.......</p>
                </div>
            </div>
        </div>

    )
}

export default LandingPage