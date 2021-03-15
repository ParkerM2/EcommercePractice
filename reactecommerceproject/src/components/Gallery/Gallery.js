import React from 'react';
import { Grid, CardMedia, Card, Typography, } from '@material-ui/core';
import useStyles from './style';


const Gallery = ({cart, images}) => {
    // pull in styling from style.js( material.io )
    const classes = useStyles();
    console.log(images)
    // setup the array of products to passed onto the product page
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {images.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Gallery;