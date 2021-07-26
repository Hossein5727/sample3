import React, { useEffect } from 'react'

function Example23() {
    const background = [
        'blue',
        'red',
        'yellow',
        'green',
        'white',
        'black',
        '#FC7753',
        '#66D7D1',
        '#F2EFEA'

    ]

    useEffect(() => {
        setInterval(() => {
            // document.querySelector('body').style.background = background[Math.floor(Math.random(+1) * 5)]
        }, 500);
    })

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default Example23