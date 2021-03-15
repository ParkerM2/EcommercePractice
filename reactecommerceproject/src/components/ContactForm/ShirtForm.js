import React from 'react';
import Select from 'react-select'
import { Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
  Grid,
  CssBaseline,
  FormLabel,
} from '@material-ui/core';
import getNum from '../../lib/shirtQuantity';
const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
)


const ShirtForm = () => {
    return (
        <>
    <br></br>
     <div style={{ margin: 'auto', maxWidth: 600 }}>
    <CssBaseline />
    <Grid container>
    <FormLabel component="legend" color="primary">Please answer these questions about your shirt order!</FormLabel>
    </Grid>
        <Grid container spacing={3}>
        <Grid item xs={6}>
            <FormLabel>Quantity of Shirts:</FormLabel>
            <Field
            fullWidth
            required
            name="Shirt Quantity"
            component={ReactSelectAdapter}
            options={getNum(24, 1000)}>
            </Field>
        </Grid>
        <Grid item xs={6}>
            <FormLabel>Quantity of Colors:</FormLabel>
            <Field
            fullWidth
            required
            name="Color Quantity"
            options={getNum(1,7)}
            component={ReactSelectAdapter}
            />
        </Grid>
    </Grid> 
    <Grid item xs={12}>
        <Field
            name="description"
            fullWidth            
            multiline
            rows={10}
            type="text"
            component={TextField}
            label="Enter your message here:"
        />  
    </Grid>
    </div>
        </>
    
    )
}

export default ShirtForm;