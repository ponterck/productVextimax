import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

interface FormState {
  nombreNino: string;
  nombrePadre: string;
  numeroCelular: string;
}

interface FormularioClienteProps {
  onComplete: (data: FormState) => void;
}

const Formulario_Cliente: React.FC<FormularioClienteProps> = ({ onComplete }) => {
  const [formState, setFormState] = useState<FormState>({
    nombreNino: '',
    nombrePadre: '',
    numeroCelular: ''
  });

  const { nombreNino, nombrePadre, numeroCelular } = formState;

  const isValid = (value: string) => value.trim() !== '';

  const isComplete = isValid(nombreNino) && isValid(nombrePadre) && isValid(numeroCelular);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onComplete(formState); 
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 2,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" component="h1" gutterBottom>
          Formulario de Cliente
        </Typography>
        
        <TextField
          label="Nombre del niño"
          variant="outlined"
          fullWidth
          name="nombreNino"
          value={nombreNino}
          onChange={handleChange}
          required
        />
        
        <TextField
          label="Nombre del padre"
          variant="outlined"
          fullWidth
          name="nombrePadre"
          value={nombrePadre}
          onChange={handleChange}
          required
        />
        
        <TextField
          label="Número de celular"
          variant="outlined"
          fullWidth
          type="tel"
          name="numeroCelular"
          value={numeroCelular}
          onChange={handleChange}
          required
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          disabled={!isComplete}
        >
          Siguiente
        </Button>
      </Box>
    </Container>
  );
};

export default Formulario_Cliente;
