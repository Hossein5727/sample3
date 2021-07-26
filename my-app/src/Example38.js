import React from 'react'
import { Paper, Container, Grid } from '@material-ui/core'

function Example38() {
    return (
        <React.Fragment>
            <Container fixed>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12}>
                        <Paper style={{ padding: '7px', textAlign: 'center' }}>Heading</Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper style={{ padding: '7px', textAlign: 'center' }}>Side Bar</Paper>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Paper style={{ padding: '7px', textAlign: 'center' }}>Main</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ padding: '7px', textAlign: 'center' }}>Fotter</Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Example38