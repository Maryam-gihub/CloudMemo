import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'

const LandingPage = () => {
    const [folder, setFolder] = useState('')
    const [container, setContainer] = useState([])
    const [showMsg, setShowMsg] = useState(true)
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRefs = useRef([])


    const colors = [
        'Green',      
        'Blue',          
        'Orange',        
        'Purple',       
        'Red',           
        'Gold',          
        'Gray',        
        'Cyan',   
        'Pink',          
        'Indigo',        
        'White',         
        'Brown'
    ]

    const add = () => {
        if (folder === '') {
            alert('Enter your folder name')
        } else {
            setContainer([...container, folder])
            setShowMsg(false)
        }
    }
    const handleDropdown = (idx) => {
        setActiveDropdown(activeDropdown === idx ? null : idx);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDropdown !== null) {
                const dropdownElement = dropdownRefs.current[activeDropdown];
                if (dropdownElement && !dropdownElement.contains(event.target)) {
                    setActiveDropdown(null);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown])

    return (
        <div className="w-100">
            <Navbar />
            <div className="d-flex" style={{ minHeight: '100vh' }}>
                <SideNavbar />
                <div className="col-lg-10 col-8 pt-4 mt-5 ms-35 lg:mx-auto" >
                    <div className="d-flex mx-auto justify-content-center gap-2 lg:mt-10">
                        <input
                            type="text"
                            onChange={(e) => setFolder(e.target.value)}
                            value={folder}
                            placeholder="Kindly Input Folder name"
                            className="col-lg-6 py-lg-2 px-lg-4 px-3 bg-white rounded-3 col-7 border border-dark shadow fw-bold text-capitalize"
                        />
                        <button className="btn shadow" onClick={add} style={{ backgroundColor: 'black' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-5  lg:ms-35 gap-lg-5 gap-4 d-flex flex-row flex-wrap justify-content-center">
                        {container.map((name, idx) => (
                            <div
                                key={idx}
                                className="col-lg-2 col-4 col-md-3 p-lg-5 p-2  border-dark shadow border-3 text-break position-relative"
                                style={{ backgroundColor: colors[idx % colors.length] }}
                                ref={(el) => (dropdownRefs.current[idx] = el)}
                            >
                                <Link to="/note">
                                    <p className="bg-light fw-bold px-3 text-dark text-capitalize" style={{ fontSize: '0.9em' }}>{name}</p>
                                </Link>
                                <button
                                    onClick={() => handleDropdown(idx)}
                                    className="inline-flex items-center p-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none"
                                >
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 4 15">
                                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                </button>
                                {activeDropdown === idx && (
                                    <div className="z-10 bg-white rounded-lg shadow-sm w-30 border-dark border-2 position-absolute">
                                        <button>
                                            <p className="block px-1 text-dark ms-4 fw-bold mt-3 hover:bg-green-200">Rename</p>
                                        </button> <br />
                                        <button>
                                            <p className="block p-1 text-dark ms-4 fw-bold hover:bg-green-200">Archive</p>
                                        </button> <br />
                                        <button onClick={() => deleteNote(idx)}>
                                            <p className="block p-1 text-dark ms-4 fw-bold hover:bg-green-200">Delete</p>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {showMsg && (
                        <>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-plus-lg text-secondary text-opacity-75" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg>
                            </div>
                            <p className="text-center fw-bold fs-4 text-secondary text-opacity-50">Create a folder.......</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LandingPage

