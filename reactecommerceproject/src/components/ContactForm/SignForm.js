import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { spacing } from '@material-ui/system';
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
import materials from '../../lib/materials';
import { KeyboardReturnRounded } from '@material-ui/icons';




const SignForm = (values) => {

    
    return (
        <>
            <form>
            <Grid>
            <Grid item xs={12}>
                        <FormLabel component="legend" color="primary">Select the material you would like to use:</FormLabel>
            <br></br>            
                <Field fullWidth name="material" component="select" >
                {materials.map((mat) => (
                    <option 
                        key={mat.value}
                        value={mat.value}
                    >
                    {mat.label}
                    </option>
                ))}
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
        </Grid>
        </form>        
        </>
    )
}

export default SignForm;