import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const FormButton = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
    
  }

  return (
    <Button style = {{marginTop: "20px", borderRadius: "20px"}} disableElevation
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default FormButton;