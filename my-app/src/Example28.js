import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'


function Example28() {



    const [show, setshow] = useState(true)

    if (show) {
        return (
            <Alert id="sel1" className="alert alert-success " dismissible onClose={() => { setshow(false) }}>
                <h3 className="alert-heading">Welcome To My Website</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum reprehenderit molestiae eveniet?
            </Alert>
        )
    }


    return (
        <React.Fragment>
            <h2>Hossein</h2>
            <button id="btn1" className="btn btn-outline-info btn-lg" onClick={() => { setshow(true) }}>Click Me </button>
        </React.Fragment>
    )
}


export default Example28