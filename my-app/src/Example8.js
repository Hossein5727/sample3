import React from 'react'

class Example8 extends React.Component {
    constructor() {
        super()
        this.ref1 = React.createRef()
    }
    componentDidMount() {
        this.ref1.current.dir = "rtl"
        this.ref1.current.value = "حسین غیاثی"
        this.ref1.current.focus()
        console.log(this.ref1);
    }
    render() {
        return (
            <React.Fragment>
                <input className="input form-control" style={{ width: '220px' }} type="text" ref={this.ref1} />
            </React.Fragment>
        )
    }
}

export default Example8