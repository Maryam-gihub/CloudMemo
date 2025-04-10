import React from 'react'
import { Link } from 'react-router-dom'


const Rightnav = () => {
  return (
    <div className='col-lg-1 col-3 px-lg-5 shadow flex flex-wrap' style={{ height: '89vh' }}>
    <div className='fs-4 gap-3 '>
        <Link to={'/'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-file-lines me-4"></i> </button></Link> <br />
        <Link to={'/remind'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 '><i className="fa-regular fa-bell me-4"></i> </button></Link> <br />
        <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 ' ><i className="fa-solid fa-folder-plus me-4"></i> </button> <br />
        <Link to={'/trash'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6 '><i className="fa-regular fa-trash-can me-4"></i> </button></Link> <br />
        <Link to={'/archive'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-box-archive me-4"></i> </button></Link> <br />
        <Link to={'/settings'} > <button className='mt-2 btn  fw-bold fs-lg-5 fs-6'><i className="fa-solid fa-gear me-4" ></i></button></Link>
    </div>

</div>
  )
}

export default Rightnav