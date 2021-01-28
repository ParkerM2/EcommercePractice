import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Shop, ShoppingCart } from '@material-ui/icons';
import shopImg from '../../assets/PinClipart.com_ramp-clipart_3220521.png'
import useStyles from './styles'; 
import { Link, useLocation } from 'react-router-dom';


const Navbar = ({totalItems}) => {
    const classes = useStyles();
    // will show path name
    const location = useLocation();
    
        
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={shopImg} alt="commerce site" height="25px" className={classes.image} />
                        Manning Signs
                    </Typography>
                    <div className={classes.grow} />

                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <Link to="/cart">Go to Cart</Link>
                            <IconButton component={Link} aria-label="Show Cart" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
