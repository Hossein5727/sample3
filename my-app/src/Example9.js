import React, { useEffect, useRef } from 'react'

function Example9() {
    let ref1 = useRef(null)

    useEffect(() => {
        ref1.current.focus()
    },[])

    return (
        <React.Fragment>
            <input type="text" ref={ref1} />
        </React.Fragment>
    )
}

export default Example9