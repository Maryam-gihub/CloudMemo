import React,{useState} from 'react'
import Navbar from './Navbar'
import SIdeNavbar from './SIdeNavbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const[isOpen, setIsOpen] = useState(true)



    return (
        <div className='flex-grow-1'>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <SIdeNavbar isOpen={isOpen}/>
            
               <div className=''><Outlet/></div> 
            
        </div>
    )
}

export default Layout