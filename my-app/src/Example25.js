import React, { useContext } from 'react'
import Example26 from './Example26'
import Example27 from './Example27'

export const mycontext1 = React.createContext()

function Example25() {
    return (
        <React.Fragment>
            <mycontext1.Provider value={<Example27 />}>
                <Example26 />
            </mycontext1.Provider>
        </React.Fragment>
    )
}

export default Example25