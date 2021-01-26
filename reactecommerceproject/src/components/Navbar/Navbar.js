import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Shop, ShoppingCart } from '@material-ui/icons';
import shopImg from '../../assets/PinClipart.com_ramp-clipart_3220521.png'
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={shopImg} alt="commerce site" height="25px" className={classes.image} />
                        Commerce Practice Site
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                    <IconButton aria-label="Show Cart" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
