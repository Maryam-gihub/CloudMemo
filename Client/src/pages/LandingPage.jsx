import React, { useState, useEffect, useRef } from '.react'
import Navbar from '../../components/Navbar'
import SideNavbar from "../../components/SideNavbar";
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [folder, setFolder] = useState('')
    const [container, setContainer] = useState([])
    const [showMsg, setShowMsg] = useState(true)
    const [dropdownOpen, setDropdownOpen] = useState(null)
    const dropdownRefs = useRef([])

    const add = () => {
        if (folder === '') {
            alert('Enter your folder name')
        } else {
            setContainer([...container, folder])
            // setFolder('')
            setShowMsg(false)
        }
    }

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownOpen !== null) {
                const dropdownElement = dropdownRefs.current[dropdownOpen]
                if (dropdownElement && !dropdownElement.contains(event.target)) {
                    setDropdownOpen(null)
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownOpen])

    return (
        <div className="w-">
            <Navbar />
            <div className="d-flex">
                <SideNavbar />
                <div className="col-lg-10 col-11 pt-4 mx-auto">
                    <div className="d-flex mx-auto justify-content-center gap-2">
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
                    <div className="mt-5 ms-lg-5 gap-lg-5 gap-4 d-flex flex-row flex-wrap justify-content-center">
                        {container.map((name, index) => (
                            <div
                                key={index}
                                className="col-lg-2 col-5 p-lg-5 p-2 border-dark border-3 text-break position-relative"
                                style={{ backgroundColor: 'red' }}
                                ref={(el) => (dropdownRefs.current[index] = el)}
                            >
                                <Link to="/note">
                                    <p className="bg-light fw-bold px-3 text-dark text-capitalize">{name}</p>
                                </Link>
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="inline-flex items-center p-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none"
                                >
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 4 15">
                                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                </button>
                                {dropdownOpen === index && (
                                    <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 position-absolute">
                                        <ul className="fs-6 text-gray-700">
                                            <button>
                                                <p className="block py-1 text-decoration-none text-info fw-bold hover:bg-gray-100">Archive</p>
                                            </button> <br/>
                                            <button>
                                                <p className="block py-1 text-decoration-none text-danger fw-bold hover:bg-gray-100">Delete</p>
                                            </button>
                                        </ul>
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

