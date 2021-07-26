import { Button } from '@material-ui/core'
import React, { useState } from 'react'

function Example36() {

    const [show, setshow] = useState()

    const showmoudle1 = () => {
        return (
            <div className="bg-info p-2">
                <h2>First Option</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        )
    }
    const showmoudle2 = () => {
        return (
            <div className="bg-info p-2">
                <h2>Second Option</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        )
    }
    const showmoudle3 = () => {
        return (
            <div className="bg-info p-2">
                <h2>Third Option</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        )
    }

    const handleClick1 = () => {
        setshow(showmoudle1)
    }
    const handleClick2 = () => {
        setshow(showmoudle2)
    }
    const handleClick3 = () => {
        setshow(showmoudle3)
    }

    return (
        <React.Fragment>
            <div className="container bg-light">
                <div className="row">
                    <ul>
                        <li className="m-2"><Button onClick={handleClick1} variant="contained" color="primary">First Option</Button></li>
                        <li className="m-2"><Button onClick={handleClick2} variant="contained" color="primary">Second Option</Button></li>
                        <li className="m-2"><Button onClick={handleClick3} variant="contained" color="primary">Third Option</Button></li>
                    </ul>
                </div>
                <div className="border">
                    {show}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Example36