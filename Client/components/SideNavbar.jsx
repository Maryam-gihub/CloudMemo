import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SIdeNavbar = () => {

    const [note, setNote] = useState('')
    const [remind, setRemind] = useState('')
    const [trash, setTrash] = useState('')
    const [archive, setArchive] = useState('')

    const addFolder = () => {
        console.log(box);
        

    }
    return (
        <div className='col-lg-2 col-3 px-lg-5 shadow flex flex-wrap' style={{ minHeight: '91vh'}}>
            <div className='fs-4 gap-3 '>
                <Link to={'/'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' onChange={(e) => setNote(e.target.value)} value={note}><i className="fa-solid fa-file-lines me-4"></i> Notes</button></Link>
                <Link to={'/remind'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' onChange={(e) => setRemind(e.target.value)} value={remind}><i className="fa-regular fa-bell me-4"></i> Reminder</button></Link>
                <Link to={'/trash'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' onChange={(e) => setTrash(e.target.value)} value={trash}><i className="fa-regular fa-trash-can me-4"></i> Trash</button></Link>
                <Link to={'/archive'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' onChange={(e) => setArchive(e.target.value)} value={archive}><i className="fa-solid fa-box-archive me-4"></i> Archive</button></Link>
                <button className='mt-2 btn  fw-bold fs-lg-5 fs-6' ><i className="fa-solid fa-gear me-4" ></i> Settings <sub>soon</sub></button>
            </div>

        </div>



    )
}

export default SIdeNavbar