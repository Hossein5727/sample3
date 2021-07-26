import React from 'react'

function Example22() {

    const background = [
        'blue',
        'red',
        'yellow',
        'green',
        'white',
        'black',
        
    ]

    const handleclick1 = () => {
        document.querySelector('body').style.background = background[Math.floor(Math.random(+ 1) * 5)]
        //  Math.floor(Math.random()*1)+6
    }

    return (
        <React.Fragment>
            <button className="btn btn-info btn-lg" onClick={handleclick1}>Change background</button>
        </React.Fragment>
    )
}

export default Example22