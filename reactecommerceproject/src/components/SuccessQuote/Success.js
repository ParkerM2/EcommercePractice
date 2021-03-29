import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography, Grid } from '@material-ui/core';
import useStyles from '../Home/styles';
import backgroundImg from '../../assets/396407.png';
import Paper from '@material-ui/core/Paper';

const post = {
  title: 'Manning Signs & Shirts',
  description:
    " Please give at least 5-7 business days for a response! ",
  image: backgroundImg,
  imgText: 'manning signs image',
  linkText: 'Click here to view our online store!',
};

const font = "'Niconne', cursive";

const Success = () => {

    const classes = useStyles();

    return (
        <>
    <CssBaseline />
      <br></br>
      <Container maxWidth="lg" component="main">
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* Increase the priority of the hero background image */}
      {<img component="img" style={{ display: 'none' }} src={backgroundImg} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h2" style={{fontFamily: font}} gutterBottom>
            Successfully Sent !
            </Typography>
            <Typography variant="h5" style={{color: 'white'}} paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
      </Paper>
      </Container>
    </>
)

}

export default Success;