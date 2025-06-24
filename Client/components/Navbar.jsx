import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: 'AIzaSyCEF7pJdsjVeAPte4Ye-voKsU_sGyeB1w4',
    authDomain: 'cloudmemo-40bf8.firebaseapp.com',
    projectId: 'cloudmemo-40bf8',
    storageBucket: 'cloudmemo-40bf8.appspot.com',
    messagingSenderId: '967698868333',
    appId: '1:967698868333:web:9c57f21c8fa0b4d2cef764',
    measurementId: 'G-BC1ZK9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Navbar = ({ isOpen, setIsOpen }) => {
    const [user, setUser] = useState(null)
    // console.log("Navbar props:", { isOpen, setIsOpen });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    },
        [auth])

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            console.log("User:", result.user)
        } catch (err) {
            console.error("Login error", err);
        }
    };

    const UserAvatar = ({ user }) => {
        const getInitials = (email) => {
            if (email) return '?';
            const emails = email.split(' ');
            return emails.map(n => n[0]).join('').toUpperCase().slice(0, 2);
        };

    }


    return (
        <div style={{ backgroundColor: 'rgb(238, 255, 251)', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1050 }} className='d-flex justify-content-between shadow py-lg-3 py-2 px-lg-5 px-3'>
            <div className='d-flex gap-4 align-items-center'>
                {user?.photoURL ? (

                    <img
                        src={user.photoURL}
                        alt='profile'
                        className='rounded-circle'
                        style={{
                            width: '40px',
                            height: "40px",
                            objectFit: 'cover',
                            fontSize: "20px",
                            color: "2px solid #c1121f"
                        }} />
                ) :
                    <button onClick={loginWithGoogle} className='btn btn-link '
                        style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", cursor: "pointer," }}>
                        <i className="fa-solid fa-user fa-2x text-black"></i>
                    </button>
                }
            </div>
            <div className='position-relative w-100 mx-4' style={{ maxWidth: '500px' }}>
                <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y text-muted ms-3"></i>
                <input type="text" className="form-control ps-5 " placeholder="Search..." />
            </div>
            <div>
                <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " type="button">
                    <span className="sr-only">Open user menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear fw-bold" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                    </svg>
                </button>

                <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-teal-100 text-decoration-none text-dark fw-bold">Dark mode</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-teal-100 text-decoration-none text-dark fw-bold">Help</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-teal-100 text-decoration-none text-dark fw-bold">Sign Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;