import React, { useState } from 'react'
import { FormControl, Switch, Container, Slider, Grid, Button, IconButton, Select, InputLabel, MenuItem, FormHelperText } from '@material-ui/core'
import { VolumeDown, VolumeUp, Send, } from '@material-ui/icons'
import AlarmIcon from '@material-ui/icons/Alarm'

function Example40() {


    const [name1, setname1] = useState('')

    function valuetext(value) {
        return `${value}°C`;
    }


    const handleChange = (event) => {
        setname1(event.target.value)
    }

    const handleClick1 = (event) => {
        event.preventDefault()
        const element1 = document.querySelector('#eleme2')
        // if (element1.innerHTML === "Iran") {
        document.getElementById('elem3').innerHTML = element1.innerHTML
        // }
        console.log(element1.innerHTML)
    }

    // const handleClick1 = () => {
    //     const element1 = document.getElementById('elem1')
    //     if (element1.checked) {
    //         alert("Hosein")
    //     }
    // }


    return (
        <React.Fragment>
            <Container fixed>
                <FormControl>
                    <Switch id="elem1" ></Switch>
                </FormControl><br />
                <Grid container>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Slider
                        className="w-25"
                        id='tr'
                        aria-labelledby="continuous-slider"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={100}
                    ></Slider>
                    <Grid item>
                        <VolumeUp className="ml-1" />
                    </Grid>
                </Grid>
                {/* { if (document.getElementById('tr').value == 50) {alert('Hossein')}} */}
                {/* <input type="checkbox" /> */}
                <Button variant="contained" color="primary" endIcon={<Send />}>Send</Button>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <FormControl>
                    <InputLabel >Name</InputLabel>
                    <Select id="eleme2" onClick={handleClick1} onChange={handleChange} value={name1} style={{ width: '120px' }} labelId="demo-simple-select-helper-label">
                        <MenuItem value="ds">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='Iran'>Iran</MenuItem>
                        <MenuItem value='USA'>USA</MenuItem>
                        <MenuItem value='Brazil'>Brazil</MenuItem>
                        <MenuItem value='Germani'>Germani</MenuItem>
                        <MenuItem value='Nethersland'>Nethersland</MenuItem>
                    </Select>
                    <FormHelperText>Please Chose Tour Country</FormHelperText>
                </FormControl>
            </Container>
            <h2 id="elem3" className="text-success"></h2>
        </React.Fragment>
    )
}

export default Example40