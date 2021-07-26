import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Example3() {
    const [employee, setemployee] = useState([])

    useEffect(() => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                setemployee(res.data)
                console.log(employee)
            })
            .catch(err => console.log(err))
    }, [])

    const show = employee.data && employee.data.length > 0 ? employee.data.map((item) => <p className="text text-success center text-justify text-center">name :  {item.employee_name}</p>) : <h1 className="text-success">Error</h1>

    return (
        <React.Fragment>
            {show}
        </React.Fragment>
    )
}

export default Example3