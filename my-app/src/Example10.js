import React from 'react'

function Example10() {

    const send1 = (e) => {
        document.getElementById('sub1').className = " btn btn-outline-warning"
        e.preventDefault()
    }

    return (
        <React.Fragment>
            <div className="p-3 text-center text-justify bg-dark" style={{ border: '1px solid gray', borderRadius: '3px' }}>
                <h2 className="text-primary p-2 text-center ">Loggin</h2>
                <form>
                    <input type="text" maxLength="12" placeholder="Name" required className="form-control text-danger col-md-8 text-center" style={{ margin: 'auto' }} /><br />
                    <input type="text" required maxLength="24" placeholder="Family" className="form-control text-danger col-md-8 text-center" style={{ margin: 'auto' }} />
                    <br />
                    <input type="submit" id="sub1" onClick={send1} className="btn btn-outline-success" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default Example10