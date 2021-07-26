import React from 'react'

function List2(props) {
    return (
        <React.Fragment>
            <div className=" col-md-5  bg-info p-4" style={{ borderRadius: '12px', margin: '9px' }}>
                <h3 className="border text-center p-2">{props.vall}</h3>
            </div>
        </React.Fragment>
    )
}

export default List2