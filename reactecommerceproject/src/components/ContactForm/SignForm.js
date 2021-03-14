import React, { useState, Component } from 'react';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, Checkbox} from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  FormGroup,
  Menu,
} from '@material-ui/core';
import getMats from '../../lib/materials';

const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
)


const SignForm = (values) => {

    
    return (
        <>
            
          
        <FormLabel component="legend" color="primary">Select the material you would like to use:</FormLabel>
        <Grid item xs={6}>
            <Field
            fullWidth
            required
            name="material"
            options={getMats()}
            component={ReactSelectAdapter}>
            </Field>
        </Grid>
              
        <Grid item xs={6}>
            <Field
            fullWidth
            required
            name="height"
            component={TextField}
            type="number"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">Inches</InputAdornment> }}
            />
        </Grid>
        <Grid item xs={6}>
            <Field
            fullWidth
            required
            name="width"
            component={TextField}
            type="number"
            label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">Inches</InputAdornment>}}
        />
        </Grid>               
        <Grid item xs={12}>
            <Field
            name="description"
            fullWidth            
            multiline
            rows={4}
            required
            type="text"
            component={TextField}
            label="Description of Sign"
        />  
    </Grid>
    <br></br>        
        <Grid container spacing={3}justify="left" alignItems="center" row>
            <Grid item xs={6}>      
                <FormLabel item component="legend" color="primary">Check out our gallery for examples</FormLabel>
            </Grid>
            <Grid item xs={6}>  
                <Button item variant="outlined" mx="auto" color="primary" target="__blank" href="/gallery">Sign Gallery</Button>
            </Grid>
                   
       </Grid>
              
        </>
    )
}

export default SignForm;