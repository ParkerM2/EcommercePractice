import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Select, } from 'final-form-material-ui';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import materials from '../../lib/materials';
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
import SignForm from './SignForm';
import VehicleForm from './VehicleWrapForm';
import ShirtForm from './ShirtForm';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';


function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};


function QuoteForm() {
    // Check to see if shirts/signs/vehicle wrap are selected to then display the corresponding form beneath.
  const [value, setValue] = useState('null')
  const [sending, setSending] = useState("Submit for Quote");
 
  const handleChange = (event) => {
      console.log("event.target.value, form js 105", event.target.value)
      setValue(event.target.value);
  };

  function handleQuoteForm(value) {
      switch (value) {
        case 'sign':
          return <SignForm materials={materials} onSubmit={onSubmit} />
        case 'shirt':
          return <ShirtForm onSubmit={onSubmit} />
        case 'vehicle':
              return <VehicleForm onSubmit={onSubmit} />
          case null:
              return <Typography>Please Select an Option!</Typography>
      }
  }

  const onSubmit = async (values) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2,));
    
    setSending("...Sending")

    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      previousCustomer: values.previousCustomer,
      email: values.email,
      company: values.company,
      height: values.height,
      width: values.width,
      description: values.description,
      orderType: value,
      material: values.material,
    }
    console.table(data)
    
};
    
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Manning Signs
      </Typography>
      <Typography variant="h5" align="center" component="h2" gutterBottom>
        Quote Request Form
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} >
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="firstName"
                    component={TextField}
                    type="text"
                    label="First Name"
                  />
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
                    fullWidth
                    required
                    name="company"
                    component={TextField}
                    type="text"
                    label="Company"
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
                <Grid item xs={6}>
                  <Field
                    name="State"
                    fullWidth
                    required
                    component={TextField}
                    type="State"
                    label="State"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="City"
                    fullWidth
                    required
                    component={TextField}
                    type="City"
                    label="City"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="Address"
                    fullWidth
                    required
                    component={TextField}
                    type="address"
                    label="Address"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="zip"
                    fullWidth
                    required
                    component={TextField}
                    type="zip"
                    label="Zip"
                  />
                  </Grid>
                <Grid item xs={12}>
                  <Field
                    label="Previous Customer"
                    name="previous customer"
                    type="checkbox"                   
                    component={Checkbox}
                  />Previous Customer
                </Grid>
                  <Grid item>
                    <FormLabel component="legend" color="primary">What type of <strong>Quote</strong> are you looking for?</FormLabel>
                  <RadioGroup onChange={handleChange} color="primary" name="typeOrder" row>
                      <FormControlLabel
                            label="Shirts"
                            name="shirts"
                            control={<Radio />}
                            type="Radio"                            
                            value="shirt"
                    />              
                      <FormControlLabel
                            label="Sign"
                            name="sign"
                            control={<Radio />}
                            type="Radio"
                            value="sign"                            
                      />
                      <FormControlLabel
                            label= "Vehicle Wrap"  
                            name= "vehicle wrap"
                            control={<Radio />}
                            type= "Radio"
                            value="vehicle"
                      />
                  </RadioGroup>
                  </Grid>
                </Grid>        
            <Grid>
                {handleQuoteForm(value)} 
            </Grid>
            <br></br>
              <Button variant="contained" color="primary" type="submit">{sending}</Button>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}

export default QuoteForm;