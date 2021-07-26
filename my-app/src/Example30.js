import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

function Example30() {

    const [show, setshow] = useState(true)

    if (show) {
        return (
            <Alert variant="dark" dismissible onClose={() => { setshow(false) }}>
                <h3 className="alert-heading">Welocome To My Website My Name Is <strong>Hossein Ghiasi</strong></h3>
                <hr />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Alert>
        )
    }

    return (
        <React.Fragment>
            <Button onClick={() => { setshow(true) }} className="p-1">Click Me And Look At The Alert Again!!</Button>
            <h3>Hossein Ghiasi</h3>
        </React.Fragment>
    )
}

export default Example30