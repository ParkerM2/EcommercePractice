import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Select } from 'final-form-material-ui';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import { spacing } from '@material-ui/system';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  FormGroup,
} from '@material-ui/core';



const SignForm = () => {
    // value of material selected in form
    const [material, setMaterial] = useState('')
    // keeps track of the material
    const handleMaterial = (event) => {
    setMaterial(event.target.value);
    };
    // displays helper text based on material selected
    function handleMaterialRadioGroup(value) {
        // console.log(value)
        switch (value) {
            case 'metal':
                return "Two sheets of aluminum surrounding a PVC core"
            case 'plastic':
                return "Corrugated plastic"
            case 'pvc':
                return "Thick PVC - used for mostly indoor wall signs"
            case 'other':
                return  <Grid item xs={12}>
                            <Field
                            name="material"
                            fullWidth
                            rowsMax={6}
                            multiline
                            required
                            component={TextField}
                            type="text"
                            label="Material"
                            />
                        </Grid> 
        }
    }
    
    return (
        <>
        <Grid item>
            <FormControl component="fieldset">
            <FormLabel component="legend" color="primary">Select the material you would like to use:</FormLabel>
            <RadioGroup name="form" value={material} onChange={handleMaterial} row>
                <FormControlLabel
                    label="Metal"
                    name="Metal"
                    control= {<Radio />}
                    type="Radio"
                    value="metal"
                />              
                <FormControlLabel
                    label="Plastic"
                    name="Plastic"
                    control= {<Radio />}
                    type="Radio"
                    value="plastic"
                />
                <FormControlLabel
                    label= "PVC"  
                    name= "PVC"
                    control= {<Radio />}
                    type= "Radio"
                    value="pvc"
                />
                <FormControlLabel
                    label= "Other"  
                    name= "other"
                    control= {<Radio />}
                    type= "Radio"
                    value="other"
                />
            </RadioGroup>
            </FormControl>
        </Grid>
        {handleMaterialRadioGroup(material)}    
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
            component={TextField}
            type="description"
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