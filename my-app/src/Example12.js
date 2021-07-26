import React from 'react'
import Example13 from './Example13'

export const usename = React.createContext()

function Example12() {
    return (
        <React.Fragment>
            <usename.Provider value="Mammad Daneshgar 🤬🤬">
                <Example13 />
            </usename.Provider>
        </React.Fragment>
    )
}

export default Example12