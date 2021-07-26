import React, { useContext, useState } from 'react'
import { mycontext1 } from './Example25'
import { Button } from 'react-bootstrap'

function Example26() {

    const name = useContext(mycontext1)
    const [val, setval] = useState()

    const clickhandler = () => {
        setval(name)
        document.getElementById('element1').style.display = "none"
    }

    return (
        <React.Fragment>
            <div className="container">
                <button id='element1' className="btn btn-outline-success btn-lg" onClick={clickhandler}>Click me</button>
                {/* {name} */}
                {val}

            </div>
        </React.Fragment>
    )
}

export default Example26