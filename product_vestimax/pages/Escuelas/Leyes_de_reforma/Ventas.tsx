import React, { useState } from 'react';
import DrawerAppBar from '@/pages/Components/Escuelas/Headers/Navbar_Escuelas';
import Formulario_Cliente from '@/pages/Components/Escuelas/Pasos_Leyes/Formulario_Cliente';
import TransferList from '@/pages/Components/Escuelas/Pasos_Leyes/TransferList';
import ResumenCompra from '@/pages/Components/Escuelas/Pasos_Leyes/ResumenCompra';

const routes = [
  { label: 'Home', path: '/Escuelas/Leyes_de_reforma' },
  { label: 'Ventas', path: '/Escuelas/Leyes_de_reforma/Ventas' },
  { label: 'Inicio', path: '/Ventas' }
];

const Ventas = () => {
    const [step, setStep] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState<{ [key: string]: { sizes: string[], prices: number[], totalPrice: number, paid: number, remaining: number } }>({});
    const [clientData, setClientData] = useState<{ nombreNino: string; nombrePadre: string; numeroCelular: string } | null>(null);
  
    const handleNext = () => {
      setStep(1);
    };
  
    const handleCompleteForm = (data: { nombreNino: string; nombrePadre: string; numeroCelular: string }) => {
      setClientData(data);
      setStep(1);
    };
  
    const handleShowResumen = (products: { [key: string]: { sizes: string[], prices: number[] } }) => {
      const updatedProducts = Object.keys(products).reduce<{ [key: string]: { sizes: string[], prices: number[], totalPrice: number, paid: number, remaining: number } }>((acc, key) => {
        const product = products[key];
        const totalPrice = product.prices.reduce((sum, price) => sum + price, 0);
        const paid = 0; 
        const remaining = totalPrice - paid;
    
        acc[key] = {
          sizes: product.sizes,
          prices: product.prices,
          totalPrice,
          paid,
          remaining,
        };
    
        return acc;
      }, {});
    
      setSelectedProducts(updatedProducts);
      setStep(2);
    };
    
    const handleBack = () => {
      setStep(1);
    };
  
    const handleFinish = (amountPaid: number) => { 
      if (clientData) {
        const purchaseData = {
          ...clientData,
          selectedProducts,
          amountPaid, 
        };
  
        console.log('Finalizing purchase with data:', purchaseData);
        
        
  
        setStep(0);
        setSelectedProducts({});
        setClientData(null);
      }
    };
  
    return (
      <div className='p-5'>
        <DrawerAppBar titulo='Martha Leticia Lumbera' routes={routes} />
  
        {step === 0 && <Formulario_Cliente onComplete={handleCompleteForm} />}
        {step === 1 && <TransferList onComplete={handleShowResumen} />}
        {step === 2 && clientData && (
          <ResumenCompra
            selectedProducts={selectedProducts}
            clientData={clientData}
            onBack={handleBack}
            onFinish={handleFinish} 
          />
        )}
      </div>
    );
  };
  
  export default Ventas;
  