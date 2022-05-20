import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, createTheme, makeStyles, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const theme = createTheme();

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'Please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div theme={theme}>
      <Box
        sx={{
          paddingTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
          <LockOutlined></LockOutlined>
        </Avatar>
        <Typography component="h3" variant="h5">
          Create an account
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="fullName" label="Full Name" form={form}></InputField>
          <InputField name="email" label="Email" form={form}></InputField>
          <PasswordField name="password" label="Password" form={form}></PasswordField>
          <PasswordField name="retypePassword" label="Retype Password" form={form}></PasswordField>

          <Button variant="contained" fullWidth sx={{ mb: 2, mt: 3 }}>
            Create an account
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default RegisterForm;
