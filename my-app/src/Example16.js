import React, { useState } from 'react'

function Example16() {


    const [val, setval] = useState('')

    const handlesearch = (e) => {
        if (val === '') {
            alert("please Enter Somthing")
        } else {
            alert('Is Loading...')
        }
        e.preventDefault()
    }


    const cahngehandler = (e) => {
        setval(e.target.value)
        console.log(val)
    }

    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <a class="navbar-brand" href="#">Hossein</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                Dropdown
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" onChange={cahngehandler} value={val} aria-label="Search" />
                        <button class="btn btn-outline-secondary my-2 my-sm-0" onClick={handlesearch} type="submit">Search</button>
                    </form>
                </div>
            </nav>


        </React.Fragment>
    )
}

export default Example16