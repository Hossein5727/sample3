import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

function Example2() {
    const [count, setcount] = useState(0)
    const thems = [
        'blue',
        'red',
        'black',
        'white',
        'cyan',
        'salmon',
        'skyblue',
        'tomato'
    ]

    function settheme1(variant) {
        variant = thems[2]
    }

    // function fun() {
    //     document.refre
    // }
    return (
        <React.Fragment>
            {/* <button className="btn btn-success">Click me</button> */}
            {/* <span className={`h1 mb-4 w-100 text-center`}>Hossein </span>
            <div className="dropdown-menu">
                <a href="#" className="dropdown-item" onClick={() => setcount(prevState => prevState + 1)}>Item1</a>
                <a href="#" className="dropdown-item">Item2</a>
                <a href="#" className="dropdown-item">Item3</a>
                <div className="dropdown-divider"></div>
            </div> */}


            <button className="btn btn-success  text-center text " onClick={
                () => document.getElementById('tobi').style.backgroundColor = thems[Math.floor(Math.random() * 7) + 1]
            }>Change Theme</button>

            <button type="reset" className="btn btn-danger" >reset</button>

            <Alert variant="dark" id="tobi">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
            </Alert>
        </React.Fragment >
    )
}

export default Example2