import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import ComponentA from './ComponentA'


function ComponentB() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <BrowserRouter>
                <button><Link to="/ComponentA">page2</Link></button>
                <button><Link to="/App">page3</Link></button>
                <button><Link to="">Home</Link></button>

                <Route exact path="/ComponentA" component={ComponentA} />
                <Route exact path="/App" component={App} />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default ComponentB