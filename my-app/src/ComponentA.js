import React, { useContext } from 'react'
import { userContext } from './App'

function ComponentA() {
    const name = useContext(userContext)
    return (
        <h1>ComponentA.js</h1>
    )
}

export default ComponentA