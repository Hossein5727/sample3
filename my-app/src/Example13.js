import React, { useContext } from 'react'
import { usename } from './Example12'


function Example13() {
    const name = useContext(usename)
    return (
        <React.Fragment>
            <h1 className="text">{name}</h1>
        </React.Fragment>
    )
}

export default Example13