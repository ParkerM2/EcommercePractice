import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import shopImg from '../../assets/PinClipart.com_ramp-clipart_3220521.png'
import useStyles from './styles'; 
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    // will show path name

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
        
    return (
        <>
            <AppBar position="sticky" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={shopImg} alt="commerce site" height="25px" className={classes.image} />
                        Manning Signs
                    </Typography>
                    <div className={classes.grow} />

                   
                        <div className={classes.button}>
                            <IconButton className={classes.menuButton} component={Link} to="/cart" aria-label="Show Cart" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                                </IconButton>
                        </div>
                    
                    <IconButton edge="start" className={classes.menuButton}  onClick={handleClick} color="inherit" aria-label="menu">
                        <Badge color="secondary">
                            <MenuIcon />
                        </Badge>
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                        >
                        <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
                        <MenuItem component={Link} to="/shop" onClick={handleClose}>Shop</MenuItem>
                        <MenuItem component={Link} to="/about" onClick={handleClose}>About Us</MenuItem>
                        <MenuItem component={Link} to="/quote" onClick={handleClose}>Quote</MenuItem>
                        </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
