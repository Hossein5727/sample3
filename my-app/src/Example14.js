import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Example14() {
    const [counter, setcounter] = useState(0)

    const handlecounter = () => {
        setcounter(prevState => prevState + 1)
    }

    return (
        <React.Fragment>
            <Button onClick={handlecounter} className="">Click {counter}</Button>
            <h1 className="text-success">{counter}</h1>
        </React.Fragment>
    )
}

export default Example14