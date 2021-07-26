import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import List2 from './List2'

function List(props) {

    const [val, setval] = useState('')
    const [list, setlist] = useState([])

    const clearinput = (e) => {
        setval('')
        alert("clear")
    }

    const saveinput = (e) => {
        alert("Success")
        let newtemp = {
            value: val,
            key: uuidv4()
        }
        let templist = []
        if (list) {
            templist = list
        }
        templist.push(newtemp)
        setlist(templist)
        setval('')
    }

    const lisst = list.map((item) => {
        return (<List2 key={item.key} vall={item.value}></List2>)
    })

    return (
        <React.Fragment>
            <div style={{ borderRadius: '12px' }} className="container offset-md-1 w-50 p-3 bg-dark mt-2">
                <h3 className="text-center text-success">{props.name}</h3>
                <label className="text-info">Note:</label>
                <input onChange={(e) => { setval(e.target.value) }} value={val} id="input1" type="textarea" className="col-md-5 offset-md-1" />
                <button onClick={clearinput} className="ml-5 btn btn-outline-primary">Clear</button>
                <button onClick={saveinput} className="ml-5 btn btn-outline-success">Save</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {lisst}
            </div>
        </React.Fragment>
    )
}

export default List