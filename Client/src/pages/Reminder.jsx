import Navbar from '../components/Navbar'
import { useState } from 'react'
<<<<<<< HEAD:Client/pages/Reminder.jsx
import SideNavbar from '../components/SIdeNavbar'

=======
import SideNavbar from '../components/SideNavbar'
>>>>>>> a476f2cea82082ee0321aceb43b1f5e59399505d:Client/src/pages/Reminder.jsx

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
<<<<<<< HEAD:Client/pages/Reminder.jsx
                <SideNavbar />
                <div className='col-lg-9 col-11 pt-4 mx-auto lg:mt-20' style={{ marginLeft: '260px', paddingTop: '80px' }}>
                    <div className='shadow mt-lg-5 mx-auto col-7 p-4 rounded-4' style={{ backgroundColor: '#e0f7fa', border: '1px solid #b2ebf2' }}>
                        <h1 className='text-center fw-bold fs-4' style={{ color: '#006064' }}>💡 What's on your mind? </h1>
                        <input type="text" className='form-control border border-dark mt-5 text-capitalize fw-bold' style={{ backgroundColor: '#fff', color: '#263238' }} placeholder='Visit a friend...' onChange={(e) => setRemind(e.target.value)} value={remind} /> <br />
                        <input type="datetime-local" className='form-control border border-dark text-capitalize fw-bold' style={{ backgroundColor: '#fff', color: '#263238' }} onChange={(e) => setTime(e.target.value)} value={time} /> <br />
                        <button className='btn shadow' onClick={addBtn} style={{ backgroundColor: '#00838f', color: '#fff' }} >
=======
                <SideNavbar/>
                <div className='col-lg-9 col-11 pt-4 mx-auto'>
                    <div className='border-3 border-dark mt-lg-5 mx-auto col-7 p-4 rounded-4' style={{ backgroundColor: 'red' }}>
                        <h1 className='text-center fw-bold fs-4'>Set Reminder</h1>
                        <input type="text" className='form-control border border-dark mt-5 text-capitalize fw-bold' placeholder='Visit a friend...' onChange={(e) => setRemind(e.target.value)} value={remind} /> <br />
                        <input type="datetime-local" className='form-control border border-dark text-capitalize fw-bold' onChange={(e) => setTime(e.target.value)} value={time} /> <br />
                        <button className='btn shadow' onClick={addBtn} style={{ backgroundColor: 'black' }} >
>>>>>>> a476f2cea82082ee0321aceb43b1f5e59399505d:Client/src/pages/Reminder.jsx
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-light fw-bold" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
<<<<<<< HEAD:Client/pages/Reminder.jsx
                    {/* Reminders Display as Cards */}
                    {array.length > 0 && (
                        <div className="mt-5 lg:ms-50">
                            <h5 className="fw-bold text-center mb-4">📋 Your Reminders</h5>
                            <div className="d-flex flex-wrap gap-3 justify-content-start">
=======
                    <div id='show' style={{ display: 'none' }}>
                        <h1 className='text-center mt-lg-5 mt-3 fw-bold text-decoration-underline fs-5'>Task Reminder Table</h1>
                        <table className='table table-bordered table-striped mx-auto border-3 border-dark mt-5 fs-5 shadow'>
                            <thead>
                                <tr className='text-white border-dark border-3 fs-6'>
                                    <th>S/N</th>
                                    <th>Task</th>
                                    <th>Time/Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '13px' }}>
>>>>>>> a476f2cea82082ee0321aceb43b1f5e59399505d:Client/src/pages/Reminder.jsx
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

