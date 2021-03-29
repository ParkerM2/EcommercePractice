import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Card, CardActions, CardHeader, Grid, CardMedia, Button,} from '@material-ui/core';
import useStyles from '../Home/styles';
import bobPic from '../../assets/bobPic.png';
import danaPic from '../../assets/danaPic.png';



const data = [
    {
        title: 'Amy Manning',
        buttonText: ['Instagram', 'Facebook'],
        buttonVariant: 'outlined',
        backgroundImage: danaPic,
        target: "__blank",
        url: ['https://www.instagram.com/shirtmakinmomma/', 'https://www.facebook.com/Mutt-Madness-in-the-MS-Delta-594898327373405/']
    },
    {
        title: 'Dale Manning',
        description: '',
        buttonText: ['Instagram', 'Facebook'],
        buttonVariant: 'outlined',
        backgroundImage: bobPic,
        target: "__blank",
        url: ['https://www.instagram.com/manning_signs/', 'https://www.facebook.com/manningsignsgreenville/']
    },
]


const Social = () => {
    const classes = useStyles();
    return (
        <>
    <CssBaseline />
    <br></br>
    <Container maxWidth="lg" alignContent="center">
        <Grid container spacing={2} alignItems="center" justify="center">
            {data.map((item) => (
            <Grid alignContent="center" item key={item.title} lg={4}>
                <Card className={classes.root}>
                <CardHeader
                  title={item.title}
                  subheader={item.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardMedia 
                    component="img"
                    alt={item.title}
                    height="300"
                    src={item.backgroundImage}
                    title={item.title}
                />
                <CardActions >
                    <Button fullWidth href={item.url[0]} target={item.target} variant={item.buttonVariant} color="inherit">
                        {item.buttonText[0]}
                    </Button>
                </CardActions>
                <CardActions>        
                    <Button href={item.url[1]} target={item.target} fullWidth variant={item.buttonVariant} color="inherit">
                        {item.buttonText[1]}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
        </Grid>
    </Container>
    </>
)

}

export default Social;