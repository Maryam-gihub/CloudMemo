import Navbar from '../components/Navbar'
import { useState } from 'react'
import SideNavbar from '../components/SideNavbar'


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
                <SideNavbar />
                <div className='col-lg-9 col-11 pt-4 mx-auto lg:mt-20' style={{ marginLeft: '260px', paddingTop: '80px' }}>
                    <div className='shadow mt-lg-5 mx-auto col-7 p-4 rounded-4' style={{ backgroundColor: '#e0f7fa', border: '1px solid #b2ebf2' }}>
                        <h1 className='text-center fw-bold fs-4' style={{ color: '#006064' }}>💡 What's on your mind? </h1>
                        <input type="text" className='form-control border border-dark mt-5 text-capitalize fw-bold' style={{ backgroundColor: '#fff', color: '#263238' }} placeholder='Visit a friend...' onChange={(e) => setRemind(e.target.value)} value={remind} /> <br />
                        <input type="datetime-local" className='form-control border border-dark text-capitalize fw-bold' style={{ backgroundColor: '#fff', color: '#263238' }} onChange={(e) => setTime(e.target.value)} value={time} /> <br />
                        <button className='btn shadow' onClick={addBtn} style={{ backgroundColor: '#00838f', color: '#fff' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                    {/* Reminders Display as Cards */}
                    {array.length > 0 && (
                        <div className="mt-5 lg:ms-50">
                            <h5 className="fw-bold text-center mb-4">📋 Your Reminders</h5>
                            <div className="d-flex flex-wrap gap-3 justify-content-start">
                                {array.map((all, index) => (
                                    <div
                                        key={index}
                                        className="shadow-sm rounded-3 p-3"
                                        style={{
                                            width: '220px',
                                            backgroundColor: '#fef4f8',
                                            borderLeft: '5px solid #f06292'
                                        }}
                                    >
                                        <h6 className="fw-bold text-capitalize">{all.remind}</h6>
                                        <p className="small text-muted mb-2">
                                            {all.time}
                                        </p>
                                        <button
                                            className="btn btn-sm btn-outline-danger w-100"
                                            // onClick={() => deleteReminder(item.id)}
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Reminder

