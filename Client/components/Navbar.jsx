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
        <div style={{ backgroundColor: 'rgb(238, 255, 251)', width: '100%' }} className='d-flex justify-content-between shadow py-lg-3 py-2 px-lg-5 px-3 W-100'>
            <nav >
                <button  className='btn' onClick={() => setIsOpen( !isOpen)} >
                    <i className="fa-solid fa-bars fa-xl"></i></button>
            </nav>
            <div className='position-relative w-100 mx-4' style={{ maxWidth: '500px' }}>
                <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y text-muted ms-3"></i>
                <input type="text" className="form-control ps-5 " placeholder="Search..." />
            </div>
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
        </div>
    );
};

export default Navbar;