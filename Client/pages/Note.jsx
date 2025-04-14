import React from 'react'


const Note = () => {
    return (
        <div>
            <div className='w-100'>
                    <div className='col-9 p-4'>
                        <textarea name="" id="" cols="30" className = 'w-100 rounded-5 p-4 overflow-y-auto form-control border border-dark border-3 fs-6' style = {{height : '80vh'}}></textarea>
                        <div className='d-flex justify-content-end'>
                            <button className='btn px-lg-5 px-3 fs-6 py-lg-2 py-1 fw-bold' style={{ backgroundColor: 'rgb(23, 253, 199)' }}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Note