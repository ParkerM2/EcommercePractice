import React, {useState, useEffect} from 'react';
import { Button, Grid, CardMedia, Card, Container, AppBar } from '@material-ui/core';
import useStyles from './style';
import Toolbar from '@material-ui/core/Toolbar';


function preventDefault(event) {
  event.preventDefault();
}


const Image = ({shirts, vehicle, carDecals, windowLettering, outdoorSigns}) => {
    const classes = useStyles()
    const [elShirts, setShirts] = useState([]);
    
    const [activeImages, setActiveImages] = useState([])

    return (
        <>
        <Grid container style={{justifyContent: 'center'}} className={classes.Button}>
            <Button variant="outlined" color="primary.main" onClick={() => setActiveImages(shirts)}>Shirts </Button>
            <Button variant="outlined" color="primary.main" onClick={() => setActiveImages(vehicle)}>Vehicle Wraps </Button>
            <Button variant="outlined" color="primary.main" onClick={() => setActiveImages(carDecals)}>Car Decals</Button>
            <Button variant="outlined" color="primary.main" onClick={() => setActiveImages(windowLettering)}>Window Lettering</Button>
            <Button variant="outlined" color="primary.main" onClick={() => setActiveImages(outdoorSigns)}>Outdoor Signs</Button>
        </Grid>
         <Container maxWidth="lg" component="main" className={classes.heroContent}>
            <Grid container spacing={5} alignItems="flex-end">
                    {activeImages.map((shirts) => (
                        <Grid item key={shirts.title} xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    alt={shirts.title}
                                    height="300"
                                    src={shirts.media.source}
                                    title={shirts.title}
                                />
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </>
    );
}

export default Image;