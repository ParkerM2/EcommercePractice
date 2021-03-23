import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'; 
import useStyles from './style';
import CssBaseline from '@material-ui/core/CssBaseline';


const Products = ({ products, onAddToCart }) => {
    // pull in styling from style.js( material.io )
    const classes = useStyles();
    // setup the array of products to passed onto the product page
    return (
        <>
        <CssBaseline />
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={() => onAddToCart(product.id, 1)}/>
                    </Grid>
                ))}
            </Grid>
            </main>
        </>
    );
}

export default Products;