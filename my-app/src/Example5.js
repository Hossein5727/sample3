import React, { useState } from 'react'

function Example5() {
    const [counter, setcounter] = useState(0)
    return (
        <React.Fragment>
            <h2>{counter}</h2>
            <button className="btn btn-danger" onClick={() => setcounter(prevState => prevState + 1)}>Count {counter}</button>
        </React.Fragment>
    )
}

export default Example5