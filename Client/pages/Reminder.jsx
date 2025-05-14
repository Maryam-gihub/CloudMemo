import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'
import { useState } from 'react'


const Reminder = () => {
    const [remind, setRemind] = useState('')
    const [array, setArray] = useState([])
    const addBtn = ()=>{
        if (remind ===''){
            alert('fill it up')
        }else{
            setArray([...array, remind])
            console.log(array);
            tab.style.display = 'none'
            show.style.display = 'block'
            setRemind('')
        }
    }
    
    return (
        <div>
            <div className='d-flex gap-2'>
                <SIdeNavbar />
                <div className='col-lg-9 col-11 ps-25 pt-4 mx-auto'>
                    <div className='mx-auto'>
                        <input type="text" className='col-lg-4 py-lg-2 px-lg-4 px-3 rounded-3 col-7 border border-dark shadow bg-white' onChange = {(e)=>setRemind(e.target.value)} value = {remind}/> <br />
                        <input type="text" className='col-lg-4 py-lg-2 px-lg-4 px-3 rounded-3 col-7 border border-dark shadow bg-white' placeholder = 'date'/>

                        <button className='btn shadow' onClick = {addBtn}  style={{ backgroundColor: 'black' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                    <div id = 'show' style = {{display: 'none'}}>
                        <h1 className= 'text-center mt-lg-5 mt-3 fw-bold text-decoration-underline fs-5'>Task Reminder Table</h1>
                        <table className = 'table table-bordered table-striped border-3 border-dark mt-5 fs-5 shadow'>
                            <thead>
                                <tr className = 'text-white border border-dark border-3'>
                                    <th>S/N</th>
                                    <th>Task</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style = {{fontSize :'13px'}}>
                        {array.map((remind, index)=>(
                            <tr key = {index}>
                                <th className = 'text-danger'>{index + 1}</th>
                                <th className = 'text-danger flex-wrap'>{remind}</th>
                                <th className = 'text-danger'>8|12|24</th>
                                <th className = 'text-danger'>Actions</th>
                            </tr>
                        ))}
                            </tbody>
                        </table>
                    </div>
                    <div id = 'tab' style = {{display: 'block'}}>
                        <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh', display: 'block'}} id = 'box' >
                            <div style = {{display: 'block' }} id = 'imm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-plus-lg text-secondary text-opacity-75" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg>
                            </div>
                        </div>
                        <p className='text-center fw-bold fs-4 text-secondary text-opacity-50' style = {{display: 'block'}} id = 'msg'>Set a reminder.......</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reminder