import React, {useState, useEffect} from 'react';
import { Button, Grid, CardMedia, Card, Container, AppBar } from '@material-ui/core';
import useStyles from './style';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';


function preventDefault(event) {
  event.preventDefault();
}

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const Image = ({shirts, vehicle, carDecals, windowLettering, outdoorSigns}) => {
    const classes = useStyles()
    const [activeImages, setActiveImages] = useState([])
    useEffect(() => {
        setActiveImages(shirts)
    }, [shirts])
    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <Grid container style={{justifyContent: 'center'}} className={classes.Button}>
            <Button variant="outlined" color="inherit" onClick={() => setActiveImages(shirts)}>Shirts </Button>
            <Button variant="outlined" color="inherit" onClick={() => setActiveImages(vehicle)}>Vehicle Wraps </Button>
            <Button variant="outlined" color="inherit" onClick={() => setActiveImages(carDecals)}>Car Decals</Button>
            <Button variant="outlined" color="inherit" onClick={() => setActiveImages(windowLettering)}>Window Lettering</Button>
            <Button variant="outlined" color="inherit" onClick={() => setActiveImages(outdoorSigns)}>Outdoor Signs</Button>
        </Grid>
         <Container maxWidth="lg" color="inherit" component="main" className={classes.heroContent}>
            <Grid container spacing={5} alignItems="flex-end">
                    {activeImages.map((image) => (
                        <Grid item key={image.title} xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    alt={image.title}
                                    height="300"
                                    src={image.media.source}
                                    title={image.title}
                                />
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </ThemeProvider>
            </>
    );
}

export default Image;