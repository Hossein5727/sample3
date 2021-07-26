import React, { useEffect, useState } from 'react'
import { Container, Typography, Avatar, Button, CircularProgress, LinearProgress } from '@material-ui/core'
import axios from 'axios'

function Example39() {

    const [showend, setshowend] = useState([])
    const [showendfilm, setshowendfilm] = useState([])
    const [show, setshow] = useState()
    const [showmoudle, setshowmoudle] = useState()


    const showmoudle1 = () => {
        return (
            <LinearProgress color="primary" />
        )
    }


    const handleClick1 = () => {
        setshowmoudle(showmoudle1)
        axios.get('https://swapi.dev/api/starships/2')
            .then(res => {
                setshowend(['model : ', res.data.model, <br />, 'manufacturer : ', res.data.manufacturer, <br />, 'crew : ', res.data.crew, <br />, 'passengers : ', res.data.passengers])
                if (res.status === 200) { setshowmoudle(null) }
                setshowendfilm(res.data.films ? res.data.films.map((item) => <a className="d-block" target="_blank" href={item}>{item}</a>) : <p></p>)
                console.log(res.status)
                // setshowend(res.data.model)
                console.log(res.data)
            })
            .catch(err => console.log(err))

        setshow(show1)
        console.log(show1)
    }
    const handleClick2 = () => {
        setshowmoudle(showmoudle1)
        axios.get('https://swapi.dev/api/starships/3')
            .then(res => {
                setshowend(['model : ', res.data.model, <br />, 'manufacturer : ', res.data.manufacturer, <br />, ' crew : ', res.data.crew, <br />, 'passengers : ', res.data.passengers])
                setshowendfilm(res.data.films ? res.data.films.map((item) => <a className="d-block" target="_blank" href={item}>{item}</a>) : <p></p>)
                if (res.status === 200) { setshowmoudle(null) }
                // setshowend(res.data.model)
                console.log(res.data)
            })
            .catch(err => console.log(err))

        setshow(show1)
        console.log(show1)
    }



    const show1 = showend.data && showend.data.length > 0 ? showend.data.map((item) => <p className="text text-success center text-justify text-center">{item}</p>) : <h2>Error</h2>

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <div className="p-5 mt-4" style={{
                    borderRadius: '13px', maxWidth: '1000px', width: '90%', height: '95%', backgroundColor: 'rgba(0, 0, 0, 0.63)', boxShadow: '0 0.2rem 0.5rem #333', borderRadius: '0.5rem', padding: '1rem', color: '#fff',
                }}>
                    <h2>Name Of Starships</h2>
                    <a onClick={handleClick1} href="#" className="text-warning link-warning">CR90 corvette</a>
                    <br />
                    <a onClick={handleClick2} href="#" className="text-warning link-warning">Star Destroyer</a>
                    <br />
                    <a href="#" className="text-warning link-warning">Sentinel-class landing craft</a>
                    <br />
                    <a href="#" className="text-warning link-warning">Death Star</a>
                    <br />
                    <a href="#" className="text-warning link-warning">Millennium Falcon</a>
                    <br />
                    <a href="#" className="text-warning link-warning">Y-wing</a>
                    <br />
                    <a href="#" className="text-warning link-warning">X-wing</a>
                    <br />
                    <a href="#" className="text-warning link-warning">TIE Advanced x1</a>
                    <br />
                    <a href="#" className="text-warning link-warning">Executor</a>
                    <br />
                    <a href="#" className="text-warning link-warning">Rebel transport</a>
                    <hr className="bg-success" />
                    <h2 className="text-light">Details</h2>
                    {/* <h3 id="text"></h3> */}
                    {showmoudle}
                    {showend}
                    <h2 className="text-light">Films</h2>
                    {showendfilm}
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Example39