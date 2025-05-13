import React,{useState} from 'react'
import Navbar from './Navbar'
import SIdeNavbar from './SIdeNavbar'

const Layout = () => {
    const[isOpen, setIsOpen] = useState(true)



    return (
        <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <SIdeNavbar isOpen={isOpen}/>
        </div>
    )
}

export default Layout