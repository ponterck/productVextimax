import React from 'react';
import DrawerAppBar from '../../Components/Escuelas/Headers/Navbar_Escuelas';

const routes = [
  { label: 'Home', path: '/Escuelas/Martha_Leticia' },
  { label: 'Ventas', path: '/Escuelas/Martha_Leticia/Ventas' },
  { label: 'Contact', path: '/Escuelas/contact' }
];

const Index = () => {
  return (
    <div>
      <DrawerAppBar titulo='Martha Leticia Lumbera' routes={routes} />
    </div>
  );
};

export default Index;
