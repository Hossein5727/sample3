import React, { useState } from 'react'
import List from './List'
import { v4 as uuidv4 } from 'uuid'

function Example20() {

    const [list, setlist] = useState([])
    const [tempinput, settempinput] = useState('')

    const handletodo1 = (e) => {
        if (tempinput != "") {
            let newtemp = {
                value: tempinput,
                key: uuidv4()
            }
            let templist = []
            if (list) {
                templist = list
            }
            templist.push(newtemp)
            setlist(templist)
            settempinput('')
        }
        e.preventDefault()
    }
    const handleChnage1 = (e) => {
        settempinput(e.target.value)
    }

    const listt = list.map((item) => {
        return (<List key={item.key} name={item.value}></List>)
    })
    return (
        <React.Fragment>
            <div className="container bg-warning p-2 d1 ">
                <h2 className="text-center">Todo</h2>
                Please Enter Your Todo
                <input value={tempinput} onChange={handleChnage1} className=" in1 form-control d-inline col-md-4 ml-2 text-center text-info fs-5 display-4" />
                <button onClick={handletodo1} className="btn btn-outline-danger ml-6 col-md-2  offset-md-4 ">Add Your Todo</button>
            </div>
            {listt}
        </React.Fragment>
    )
}

export default Example20