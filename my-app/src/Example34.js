import React from 'react'
import { Link, BrowserRouter, Router, Route } from 'react-router-dom'
import Example33 from './Example33'

function Example34() {
    return (
        <React.Fragment>
            <h2>Hossein</h2>

            <BrowserRouter>
                <ul>
                    <li><Link to="page2">page2</Link></li>
                    <li><Link to="">Home page</Link></li>
                </ul>
                <Route exact path="/Page2" component={Example33} />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Example34