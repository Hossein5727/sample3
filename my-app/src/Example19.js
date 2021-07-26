import React from 'react'
import { Link, BrowserRouter, Route, Router } from 'react-router-dom'
import Example17 from './Example17'

function Example19() {

    const handleSubmit1 = (e) => {
        let elem1 = document.forms["form1"]["fname"].value
        let elem2 = document.forms["form1"]["pass"].value

        if (elem1 == "") {
            alert("Name must be filled out")
        }
        if (elem2 == "") {
            alert("Password must be filled out")
        }

        if (elem1 != "" && elem2 != "") {
            alert("success")
        }

        e.preventDefault()
    }

    return (
        <React.Fragment>
            <div className="container bg-dark p-5 tobi">
                <h1 className="text-center text-primary">Login</h1>
                <form name="form1" className="form-group" onSubmit={handleSubmit1}>
                    <input name="fname" id="input1" className="col-md-4 form-control offset-md-4 mt-3" type="text" placeholder="name" />
                    <input name="pass" id="input2" className="col-md-4 form-control  offset-md-4" type="password" placeholder="paaword" />
                    <input type="submit" className="col-md-2 form-control  offset-md-5 mt-1 btn btn-outline-primary btn-lg" />
                </form>
            </div>
            <BrowserRouter>
                <Route exact path="/Example17" component={Example17} />
            </BrowserRouter>
        </React.Fragment >
    )
}

export default Example19