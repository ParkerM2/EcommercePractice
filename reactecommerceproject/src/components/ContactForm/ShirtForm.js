import React, {Component} from 'react';
import Select from 'react-select'
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import getNum from '../../lib/shirtQuantity';
const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
)


const SignForm = () => {
    return (
        <>
    <FormLabel component="legend" mt={1} mb={1} color="primary">Please answer these questions about your shirt order!</FormLabel>
    <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
            <FormLabel>Quantity :</FormLabel>
            <Field
            fullWidth
            required
            name="Quantity"
            component={ReactSelectAdapter}
            options={getNum()}>
            </Field>
        </Grid>
    <Grid item xs={6}>
        <Field
            fullWidth
            required
            name="lastName"
            component={TextField}
            type="text"
            label="Last Name"
        />
    </Grid>
    <Grid item xs={12}>
        <Field
            name="email"
            fullWidth
            required
            component={TextField}
            type="email"
            label="Email"
        />
        </Grid>
        </Grid>
    </>
    )
}

export default SignForm;