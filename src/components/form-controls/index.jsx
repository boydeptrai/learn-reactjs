import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';


InputField.propTypes = {
    form:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,

    label:PropTypes.string,
    disabled: PropTypes.bool,
    
};

function InputField(props) {
    const {form,name,label,disabled} = props;
    const {control} = form;
    
    console.log(control);
    return (
        <Controller
         name={name}
         control={control}
         render={({field:{onChange, onBlur, value, name},fieldState:{invalid,error} }) =>(
          <TextField
          label={label}
          disabled={disabled}
          fullWidth
          
          name={name}
          error ={invalid}
          helperText={error?.message}
          
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
         )}
         ></Controller>
          
        
    );
}

export default InputField;