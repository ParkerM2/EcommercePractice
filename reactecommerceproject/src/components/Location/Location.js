import GoogleMaps from 'simple-react-google-maps';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

const Location = () => {

    return (
        <>
    <Container >
    <GoogleMaps
        apiKey={googleKey}
        style={{height: "400px", width: "100%"}}
        zoom={6}
        center={{lat: 33.3928269, lng: -91.0093956}}
        markers={{lat: 33.3928269, lng: -91.0093956}} //optional
    />
    </Container>
    </>
)

}

export default Location;