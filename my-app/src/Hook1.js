import React, { useReducer } from 'react'

const inintialValue = 0


const reduser = (state, action) => {
    switch (action) {
        case 'plus':
            return state + 1
        case 'minus':
            return state - 1
    }
}

function Hook1() {
    const [count, dispath] = useReducer(reduser, inintialValue)
    return (
        <React.Fragment>
            <h1>count {count}</h1>
            <button onClick={() => dispath('plus')}>plus</button>
            <button onClick={() => dispath('minus')}>minus</button>
        </React.Fragment>
    )
}

export default Hook1