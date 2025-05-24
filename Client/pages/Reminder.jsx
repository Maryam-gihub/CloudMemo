import Navbar from '../components/Navbar'
import SIdeNavbar from '../components/SIdeNavbar'
import { useState } from 'react'


const Reminder = () => {
    const [remind, setRemind] = useState('')
    const [time, setTime] = useState('')
    const [array, setArray] = useState([])
    const addBtn = () => {
        if (remind === '' || time === '') {
            alert('fill it up')
        } else {
            const all = {
                remind,
                time
            }
            setArray([...array, all])
            console.log(array);
            show.style.display = 'block'
            setRemind('')
        }
    }

    return (
        <div>
            <Navbar />
            <div className='d-flex gap-2'>
                <SIdeNavbar />
                <div className='col-lg-9 col-11 pt-4 mx-auto'>
                    <div className='border-3 border-dark mt-lg-5 mx-auto col-7 p-4 rounded-4' style={{ backgroundColor: 'red' }}>
                        <h1 className='text-center fw-bold fs-4'>Set Reminder</h1>
                        <input type="text" className='form-control border border-dark mt-5 text-capitalize fw-bold' placeholder='Visit a friend...' onChange={(e) => setRemind(e.target.value)} value={remind} /> <br />
                        <input type="datetime-local" className='form-control border border-dark text-capitalize fw-bold' onChange={(e) => setTime(e.target.value)} value={time} /> <br />
                        <button className='btn shadow' onClick={addBtn} style={{ backgroundColor: 'black' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                    <div id='show' style={{ display: 'none' }}>
                        <h1 className='text-center mt-lg-5 mt-3 fw-bold text-decoration-underline fs-5'>Task Reminder Table</h1>
                        <table className='table table-bordered table-striped mx-auto border-3 border-dark mt-5 fs-5 shadow'>
                            <thead>
                                <tr className='text-white border border-dark border-3 fs-6'>
                                    <th>S/N</th>
                                    <th>Task</th>
                                    <th>Time/Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '13px' }}>
                                {array.map((all, index) => (
                                    <tr key={index}>
                                        <th className='text-danger'>{index + 1}</th>
                                        <th className='text-danger flex-wrap text-capitalize'>{all.remind}</th>
                                        <th className='text-danger'>{all.time}</th>
                                        <th className='text-danger'>Actions</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reminder