import React, { useCallback, useState } from 'react'

function Example4() {
    const [name, setname] = useState('Hossein')
    const [famlily, setfamlily] = useState('Ghiasi')

    const changename = useCallback(() => {
        setname('mammad')
    }, name)
    const changefamily = useCallback(() => {
        setfamlily('ghafori')
    }, famlily)
    return (
        <React.Fragment>
            <h2>{name} {famlily} </h2>

            <button className="btn btn-dark" onClick={changename}>Change Name</button>
            <br />
            <button className="btn btn-dark" onClick={changefamily}>Change Family</button>
        </React.Fragment>
    )
}

export default Example4