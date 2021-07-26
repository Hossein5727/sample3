import React, { useState } from 'react'

function Example17() {

    const [val1, setval1] = useState('')
    const [val2, setval2] = useState('')

    const cangehandler1 = (e) => {
        setval1(e.target.value)
    }
    const cangehandler2 = (e) => {
        setval2(e.target.value)
    }

    return (
        <React.Fragment>
            <input type="text" className="col-md-2 form-control" onChange={cangehandler1} value={val1} />
            <input type="text" className="col-md-2 form-control" onChange={cangehandler2} value={val2} />

            <h1>name is :{val1}  family is:{val2}</h1>
        </React.Fragment>
    )
}

export default Example17