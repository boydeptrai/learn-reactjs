import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import InputField from 'components/form-controls';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
          .required('Please enter title')
          .min(5, 'Title is too short!'),
      });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email:'',
            password:'',
            retypePassword:''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
          onSubmit(values);  
        }
        form.reset();
    }
    return (
        <div>
           <Avatar>
               <LockOutlined >

               </LockOutlined>
           </Avatar>
           <Typography component="h3" variant='h5'>
               Create an account
           </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="fullName" label="Full Name" form={form} ></InputField>
            <InputField name="email" label="Email" form={form} ></InputField>
            <InputField name="password" label="Password" form={form} ></InputField>
            <InputField name="retypePassword" label="Retype Password" form={form} ></InputField>
           </form>
        </div>
       
    );
}

export default RegisterForm;