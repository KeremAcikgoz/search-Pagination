import React, { useState } from 'react'
import {Badge, Collapse} from 'react-bootstrap'

const Job = ({ job }) => {

    const [click, setClick] = useState(false)

    return (
        <li key={job.id} className='list-item'>
        <div className='props'>
          <h2 className="name">{job.job} <span className="text-muted font-weight-light">- {job.company}</span></h2>
          <div className='details'>
            <Badge variant="dark" className="mr-2">{job.date}</Badge>
            <Badge variant="info">{job.city}</Badge>
          </div>
          <button 
            className='mt-2 btn-sm btn-outline-info' 
            style={{width: '150px'}} 
            variant="primary" 
            onClick={() => setClick(prevClick => !prevClick)}
            >
                {!click ? 'Details' : 'Hide'}
            </button>
            <Collapse in={click}>
                <div className="mt-3">
                    <p>{job.details}</p>
                </div>
            </Collapse>
        </div>
      </li>
    )
}

export default Job