import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Select, } from 'final-form-material-ui';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
import { DragHandleTwoTone } from '@material-ui/icons';

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

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
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
    const [quoteForm, setQuoteForm] = useState()
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    function handleQuoteForm(value) {
        console.log(value)
        switch (value) {
            case 'sign':
                return <SignForm />
            case 'shirt':
                return <ShirtForm />
            case 'vehicle':
                return <VehicleForm />
            case null:
                return <Typography>Please Select an Option!</Typography>
        }
    }
    
    
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
          <form onSubmit={handleSubmit} noValidate>
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
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    label="Previous Customer"
                    control={
                        <Field
                        name="Previous Customer?"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" color="primary">Are you looking for a Shirt, Sign, or Vehicle Wrap?</FormLabel>
                    <RadioGroup name="form" value={value} onChange={handleChange} row>
                      <FormControlLabel
                            label="Shirts"
                            name="shirts"
                            control= {<Radio />}
                            type="Radio"
                            value="shirt"
                    />              
                      <FormControlLabel
                            label="Sign"
                            name="sign"
                            control= {<Radio />}
                            type="Radio"
                            value="sign"
                      />
                      <FormControlLabel
                            label= "Vehicle Wrap"  
                            name= "vehicle wrap"
                            control= {<Radio />}
                            type= "Radio"
                            value="vehicle"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>        
            </Grid>
            <Grid>
                {handleQuoteForm(value)} 
            </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}

export default QuoteForm;