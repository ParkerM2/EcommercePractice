import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, CssBaseline } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import shopImg from '../../assets/PinClipart.com_ramp-clipart_3220521.png'
import useStyles from './styles'; 
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom'

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    if (!s) return 'Home'
  return s.charAt(0).toUpperCase() + s.slice(1)
}


const Navbar = ({totalItems}) => {
    const classes = useStyles();
    // will show path name
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const pathname = capitalize(location.pathname.replace("/", ""));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
        
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" component="main" spacing={5}>
                <br></br>
            <AppBar position="sticky" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={shopImg} alt="commerce site" height="25px" className={classes.image} />
                        {pathname}
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
                        elevation={0}
                        >
                        <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
                        <MenuItem component={Link} to="/quote" onClick={handleClose}>Quote</MenuItem>
                        <MenuItem component={Link} to="/shop" onClick={handleClose}>Shop</MenuItem>
                        <MenuItem component={Link} to="/gallery" onClick={handleClose}>Gallery</MenuItem>
                        <MenuItem component={Link} to="/socials" onClick={handleClose}>Socials</MenuItem>
                        <MenuItem component={Link} to="/Location" onClick={handleClose}>Location</MenuItem>
                        </Menu>
                </Toolbar>
            </AppBar>
        </Container>
    </>
    )
}

export default Navbar
