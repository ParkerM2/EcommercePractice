import useStyles from './styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                Copyright © Manning Signs
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        )
    }
    
    const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Quote', 'Locations'],
    },
    {
        title: 'Socials',
        description: ['Instagram', 'Facebook',]
    },
    {
        title: 'Gallery',
        description: ['Outdoor Signs', 'Window Lettering', 'Car Decals', 'Vehicle Wraps', 'T-Shirts'],
    },
    {
        title: 'Online Shop',
        description: ['Shop']
    }
    ]

const Footer = () => {
    const classes = useStyles();

   return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Typography component={Link} to={"/" + item.replace(/\s+/g, '')} variant="subtitle1" color="textSecondary">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container >
    )
}

export default Footer;