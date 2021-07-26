import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Example17 from './Example17'

function Example18() {

    const [val1, setval1] = useState('')
    const [val2, setval2] = useState('')
    const [check, setcheck] = useState(true)

    const handleClick1 = () => {
        if (val1 != '' && val2 != '') {
            alert('success')
        }
    }

    const handleChange1 = (e) => {
        setval1(e.target.value)
    }

    const handleChange2 = (e) => {
        setval2(e.target.value)
    }

    // useEffect(() => {
    //     if (val1 != '' && val2 != '') {
    //         // open(Example17)
    //         // return (<Example17 />)
    //         setcheck(false)

    //         alert('success')
    //     }
    // }, [])

    return (
        <React.Fragment>
            <BrowserRouter>
                <Route exact path="/Example17" component={Example17} />
            </BrowserRouter>
            <div className="container">
                <p className="title">وارد شوید</p>
                <input required onChange={handleChange1} value={val1} type="text" className="login user" placeholder="نام کاربری" />
                <input required value={val2} onChange={handleChange2} type="password" className="login pass" placeholder="رمزعبور" />
                <input disabled={check} type="button" className="btn pulse" value="ورود به سایت" />
            </div>
        </React.Fragment>
    )
}

export default Example18