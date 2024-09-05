// FormLogin.tsx
import React from 'react';
import { TextField, Typography } from '@mui/material';

interface FormLoginProps {
  values: {
    correo: string;
    contraseña: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    correo: string;
    contraseña: string;
  };
}

const FormLogin: React.FC<FormLoginProps> = ({ values, onChange, errors }) => {
  return (
    <div className="flex flex-col w-full p-4">
      <div className='w-full p-5'>
        <Typography>
          Correo electrónico
        </Typography>
        <TextField 
          label="Correo" 
          name="correo"
          type='email'
          variant="outlined" 
          className='w-full' 
          value={values.correo}
          onChange={onChange}
          error={!!errors.correo}
          helperText={errors.correo}
        />
      </div>
      
      <div className='w-full p-5'>
        <Typography>
          Contraseña
        </Typography>
        <TextField 
          label="Contraseña" 
          name="contraseña"
          type="password" 
          variant="outlined"
          className='w-full'
          value={values.contraseña}
          onChange={onChange}
          error={!!errors.contraseña}
          helperText={errors.contraseña}
        />
      </div>
    </div>
  );
};

export default FormLogin;
