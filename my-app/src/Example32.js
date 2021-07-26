import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Example32() {

    const [emplooye, setemplooye] = useState([])

    useEffect(() => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                setemplooye(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const dataa = emplooye.data && emplooye.data.length > 0 ? emplooye.data.map((item) => { return (<p>{item.employee_name}</p>) }) : <p>Error</p>

    return (
        <React.Fragment>
            {dataa}
        </React.Fragment>
    )
}

export default Example32