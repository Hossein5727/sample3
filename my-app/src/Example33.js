import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Example33() {

    const [show1, setshow1] = useState()

    const tobi = () => {
        return (
            <p className="border">Hossein Ghiasi</p>
        )
    }

    const handleClick = () => {
        setshow1(<p className="border text-center">Hossein Ghiasi</p>)
    }

    return (
        <React.Fragment>
            <Button onClick={handleClick}>Click To Show</Button>
            {show1}
        </React.Fragment>
    )
}

export default Example33