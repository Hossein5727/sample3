import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Request1() {
    const [employes, setemployes] = useState([])
    useEffect(() => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                setemployes(response.data)
                console.log(response.data);
            })
            .catch(error => console.log(error))

    }, [])
    return (
        <React.Fragment>
            {employes.data && employes.data.length > 0 ? employes.data.map((item) => <p>name is :  {item.employee_name}</p>) : <p>Error</p>}
        </React.Fragment>
    )
}

export default Request1