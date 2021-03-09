import useStyles from './styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import vehicleWrap from './../../assets/vehiclewrap.jpg'

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

const tiers = [
    {
        title: 'Shirts',
        description: ['Must order 24+',],
        buttonText: 'Get a Quote!',
        buttonVariant: 'contained',
        backgroundImage: {vehicleWrap},
    },
    {
        title: 'Signs',
        
        description: ['View our Gallery for more'],
        buttonText: 'Get a Quote!',
        buttonVariant: 'contained',
        backgroundImage: {vehicleWrap}
    },
    {
        title: 'Vehicle Wrap',
        description: ["description"],
        buttonText: 'Get a Quote!',
        buttonVariant: 'contained',
        backgroundImage: {vehicleWrap},
    },
];
const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact Us', 'Locations'],
    },
    {
        title: 'Socials',
        description: ['Instagram', 'Facebook',]
    },
    {
        title: 'Gallery',
        description: ['Outdoor Signs', 'Window Lettering', 'Car Decals', 'Vehicle Wraps', 'T-Shirts'],
    },
]

const HomePage = () => {
    const classes = useStyles();
    
    return ( 
    <>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Manning Signs
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        We offer a large range of T-Shirt and Sign options! Feel free to contact us for a quote or check out our online store to see whats in stock!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12}  md={4}>
                <Card className={classes.root}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                      />
                <CardMedia 
                    component="img"
                    alt={tier.title}
                    height="200"
                    src={tier.backgroundImage}
                    title={tier.title}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
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
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </>
    )
}

export default HomePage;