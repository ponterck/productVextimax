import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import FormLogin from '../Formulario/Form_Login';
import ButtonLogin from '../Formulario/Button_Login';

const containerStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: 2,
  borderRadius: "8px",
  background: "white"
};

const innerContainerStyles = {
  padding: 2, 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  width: '100%', 
};

const formContainerStyles = {
  padding: 2, 
  display: 'flex', 
  flexDirection: 'column', 
  width: '100%', 
  marginTop: 2
};

const buttonContainerStyles = {
  padding: 2, 
  display: 'flex', 
  flexDirection: 'column', 
  width: '100%'
};

const typographyStyles = {
  fontWeight: "600"
};

const ConainerBase: React.FC = () => {
  const [loginData, setLoginData] = useState({
    correo: '',
    contraseña: '',
  });

  const [errors, setErrors] = useState({
    correo: '',
    contraseña: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <Container sx={containerStyles}>
      <Container sx={innerContainerStyles}>
        <Typography sx={{fontWeight:"600", fontSize:"30px"}}>
          Vestimax
        </Typography>
        <Typography variant="body1" gutterBottom sx={typographyStyles}>
          Bienvenido al admin panel
        </Typography>
      </Container>
      <Container maxWidth='sm' sx={formContainerStyles}>
        <FormLogin values={loginData} onChange={handleChange} errors={errors} />
      </Container>
      <Container maxWidth='sm' sx={buttonContainerStyles}>
        <ButtonLogin />
      </Container>
    </Container>
  );
};

export default ConainerBase;
