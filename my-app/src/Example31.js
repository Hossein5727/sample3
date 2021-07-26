import React, { useState } from 'react'
import { Alert, ToggleButton } from 'react-bootstrap'

function Example31() {

    const [tick, settick] = useState(0)
    const [tick2, settick2] = useState(0)
    const [tick3, settick3] = useState(0)
    const [intervall, setintervall] = useState()


    const start = () => {
        if (intervall == null) {
            setintervall(setInterval(() => {
                settick(prevState => prevState + 1)
            }, 1000))
            setintervall(setInterval(() => {
                settick2(prevState => prevState + 1)
            }, 60000))
            setintervall(setInterval(() => {
                settick3(prevState => prevState + 1)
            }, 600000))
        }
    }




    // console.log(tick2)



    const reset = () => {
        settick(0)
    }

    const stop = () => {
        setintervall(null)
        clearInterval(intervall)
    }

    return (
        <React.Fragment>
            <div className="container text-center">
                <Alert variant="primary" style={{ borderRadius: '11px' }}>
                    <h1 className="alert-heading text-lg">Timer</h1>
                    <hr />
                    <h1 className="mb-3">{tick3}{tick2} : {tick}</h1>
                    <button style={{ borderRadius: '4px', margin: '2px' }} onClick={start} className="btn btn-outline-success ">Start</button>
                    <button style={{ borderRadius: '4px', margin: '2px' }} onClick={reset} className="btn btn-outline-info">Reset</button>
                    <button style={{ borderRadius: '4px', margin: '2px' }} onClick={stop} className="btn btn-outline-danger">Stop</button>
                </Alert>
            </div>
        </React.Fragment>
    )
}

export default Example31