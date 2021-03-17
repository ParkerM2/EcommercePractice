import React, {useState} from 'react';
import { Grid, CardMedia, Card, Typography, Button, } from '@material-ui/core';
import useStyles from './style';
import Toolbar from '@material-ui/core/Toolbar';

function preventDefault(event) {
  event.preventDefault();
}


const Image = ({shirts, vehicle, carDecals, windowLettering, outdoorSigns}) => {
    const classes = useStyles();
    

    const [activeImages, setActiveImages] = useState([])
  
    return (
        <>
            
            {/* <Toolbar  color="primary" aria-label="contained primary button group" onClick={preventDefault}>
                <Button disabled size='large' value="shirts" onClick={setActiveImages(shirts)} >shirts</Button>
                <Button  disabled size='large' onClick={setActiveImages(vehicle)} >Vehicle Wraps</Button>
                <Button  disabled size='large' onClick={setActiveImages(carDecals)} >Car Decals</Button>
                <Button  disabled size='large' onClick={setActiveImages(windowLettering)}>Window Lettering</Button>
                <Button  disabled size='large' onClick={setActiveImages(outdoorSigns)} >Outdoor Signs</Button>
            </Toolbar> */}
                





            
            <Grid className={classes.heroContent} container justify="center" spacing={4}>
                {/* toolbar instead of calling images here, pass through different images here in  */}
                {shirts.map((product) => (
                    <Grid className={classes.media} item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={product.media.source} category={product.categories[0].name} title={product.name} />
                        </Card>
                    </Grid>
                ))}
            
           
                {/* toolbar instead of calling images here, pass through different images here in  */}
                {vehicle.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={product.media.source} category={product.categories[0].name} title={product.name} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
      
        </>
    );
}

export default Image;