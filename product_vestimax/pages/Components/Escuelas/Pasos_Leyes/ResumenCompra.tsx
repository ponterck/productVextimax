import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Container, TextField } from '@mui/material';

interface ResumenCompraProps {
  selectedProducts: { [key: string]: { sizes: string[], prices: number[], totalPrice: number, paid: number, remaining: number } };
  clientData: { nombreNino: string; nombrePadre: string; numeroCelular: string };
  onBack: () => void;
  onFinish: (amountPaid: number) => void; 
}

const ResumenCompra: React.FC<ResumenCompraProps> = ({ selectedProducts, clientData, onBack, onFinish }) => {
  const [abono, setAbono] = useState<string>('');
  const totalAmount = Object.values(selectedProducts).reduce((total, product) => total + product.totalPrice, 0);

  const handleAbonoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAbono(event.target.value);  
  };

  const handleFinish = () => {
    const parsedAbono = parseFloat(abono);
    if (!isNaN(parsedAbono)) {
      onFinish(parsedAbono);
    } else {
      
      alert('Por favor ingresa un valor válido para el abono.');
    }
  };

  return (
    <Container className='shadow-lg rounded-sm'>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          Resumen de la Compra
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          Datos del Cliente
        </Typography>
        <Typography variant="body1">Nombre del niño: {clientData.nombreNino}</Typography>
        <Typography variant="body1">Nombre del padre: {clientData.nombrePadre}</Typography>
        <Typography variant="body1">Número de celular: {clientData.numeroCelular}</Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Productos Seleccionados
        </Typography>
        <List>
          {Object.entries(selectedProducts).map(([productName, { sizes, prices, totalPrice, paid, remaining }]) => (
            <ListItem key={productName}>
              <ListItemText
                primary={productName}
                secondary={`Tamaños: ${sizes.join(', ')} | Precio Total: $${totalPrice.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Total General
        </Typography>
        <Typography variant="body1">Total a Pagar: ${totalAmount.toFixed(2)}</Typography>

        <Box sx={{ mt: 2 }}>
          <TextField
            label="Abono"
            variant="outlined"
            fullWidth
            value={abono}
            onChange={handleAbonoChange}
            InputProps={{
              startAdornment: '$',
            }}
          />
        </Box>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={onBack}>
            Volver
          </Button>
          <Button variant="contained" color="primary" onClick={handleFinish}>
            Finalizar Compra
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResumenCompra;
