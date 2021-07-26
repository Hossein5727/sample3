import React, { useEffect, useRef } from 'react'

function Example29() {

    const ref1 = useRef(null)

    useEffect((e) => {
        ref1.current.focus()
        ref1.current.value = "Hossein"
        ref1.current.select()
        // ref1.current.scroll = alert("mame")

        console.log(ref1);
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <span className=" label-success">Name </span>
                <input ref={ref1} type="text" className="form-control w-25 d-inline" />
            </div>
        </React.Fragment>
    )
}

export default Example29