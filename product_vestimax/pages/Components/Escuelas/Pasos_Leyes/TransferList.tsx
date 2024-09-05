import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

interface Size {
  size: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  sizes: Size[];
}

const products: { id: number; name: string; sizes: { size: string; price: number }[] }[] = [
    {
      id: 0,
      name: 'Pantalón',
      sizes: [
        { size: '6', price: 100 },
        { size: '8', price: 100 },
        { size: '10', price: 150 },
        { size: '12', price: 150 },
        { size: '14', price: 180 },
        { size: '16', price: 180 }
      ]
    },
    {
      id: 1,
      name: 'Playera',
      sizes: [
        { size: '6', price: 100 },
        { size: '8', price: 100 },
        { size: '10', price: 150 },
        { size: '12', price: 150 },
        { size: '14', price: 180 },
        { size: '16', price: 180 }
      ]
    },
    {
      id: 2,
      name: 'Camisa',
      sizes: [
        { size: '6', price: 100 },
        { size: '8', price: 100 },
        { size: '10', price: 150 },
        { size: '12', price: 150 },
        { size: '14', price: 180 },
        { size: '16', price: 180 }
      ]
    },
    {
      id: 3,
      name: 'Suéter',
      sizes: [
        { size: '6', price: 100 },
        { size: '8', price: 100 },
        { size: '10', price: 150 },
        { size: '12', price: 150 },
        { size: '14', price: 180 },
        { size: '16', price: 180 }
      ]
    },
    {
      id: 4,
      name: 'Jumper',
      sizes: [
        { size: '6', price: 100 },
        { size: '8', price: 100 },
        { size: '10', price: 150 },
        { size: '12', price: 150 },
        { size: '14', price: 180 },
        { size: '16', price: 180 }
      ]
    },
    {
      id: 5,
      name: 'Chamarra',
      sizes: [
        { size: '6', price: 100 },
        { size: '8', price: 100 },
        { size: '10', price: 150 },
        { size: '12', price: 150 },
        { size: '14', price: 180 },
        { size: '16', price: 180 }
      ]
    }
  ];

interface TransferListProps {
  onComplete: (products: { [key: string]: { sizes: string[], prices: number[], totalPrice: number, paid: number, remaining: number } }) => void;
}

const TransferList: React.FC<TransferListProps> = ({ onComplete }) => {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string[] }>({});

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSizeChange = (productId: number, size: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedSizes = selectedSizes[productId] || [];
    const newSizes = event.target.checked 
      ? [...checkedSizes, size] 
      : checkedSizes.filter(s => s !== size);

    setSelectedSizes(prev => ({ ...prev, [productId]: newSizes }));
  };

  const handleLogSelection = () => {
    const productNames = products.reduce<{ [key: number]: string }>((acc, product) => {
      acc[product.id] = product.name;
      return acc;
    }, {});

    const selectedProductDetails = checked.reduce<{ [key: string]: { sizes: string[], prices: number[], totalPrice: number, paid: number, remaining: number } }>((acc, productId) => {
      const product = products.find(p => p.id === productId);
      const productName = productNames[productId];
      if (product && productName) {
        const sizes = selectedSizes[productId] || [];
        const prices = sizes.map(size => {
          const sizePrice = product.sizes.find(s => s.size === size)?.price || 0;
          return sizePrice;
        });
        const totalPrice = prices.reduce((sum, price) => sum + price, 0);
        const paid = 0;  // No se usa el totalAbono, ahora es 0
        const remaining = totalPrice - paid;
    
        acc[productName] = {
          sizes,
          prices,
          totalPrice,
          paid,
          remaining,
        };
      }
      return acc;
    }, {});
    
    onComplete(selectedProductDetails);
  };

  const customList = (items: Product[]) => (
    <Paper
      sx={{
        width: isSmallScreen ? '100%' : '100%', 
        height: isSmallScreen ? 'auto' : 500, 
        overflow: 'auto',
        padding: 2, 
      }}
    >
      <List dense component="div" role="list">
        {items.map(product => {
          const labelId = `transfer-list-item-${product.id}-label`;

          return (
            <div key={product.id}>
              <ListItemButton role="listitem" onClick={handleToggle(product.id)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(product.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, color:"black" }} 
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={product.name} primaryTypographyProps={{style: { fontSize: "30px", fontWeight:"600" }}}/>
              </ListItemButton>
              <Box sx={{ ml: 2, mb: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {product.sizes.map(size => (
                  <Box
                    key={size.size}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      mb: 1,
                      width: 80,
                    }}
                  >
                    <Typography variant="caption" sx={{ mb: 0.5 }}>
                      {size.size} (${size.price})
                    </Typography>
                    <Checkbox
                      checked={selectedSizes[product.id]?.includes(size.size) || false}
                      onChange={handleSizeChange(product.id, size.size)}
                      inputProps={{ 'aria-labelledby': `size-${size.size}` }}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } }} 
                    />
                  </Box>
                ))}
              </Box>
            </div>
          );
        })}
      </List>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Total: {checked.reduce((total, productId) => {
            const product = products.find(p => p.id === productId);
            if (product) {
              const sizes = selectedSizes[productId] || [];
              const totalProductPrice = sizes.reduce((sum, size) => {
                const sizePrice = product.sizes.find(s => s.size === size)?.price || 0;
                return sum + sizePrice;
              }, 0);
              return total + totalProductPrice;
            }
            return total;
          }, 0)}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogSelection}>
          Log Selected
        </Button>
      </Box>
    </Paper>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {customList(products)}
      </Grid>
    </Grid>
  );
};

export default TransferList;
