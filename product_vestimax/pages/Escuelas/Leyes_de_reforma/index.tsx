import DrawerAppBar from '@/pages/Components/Escuelas/Headers/Navbar_Escuelas'
import React from 'react'
const routes = [
    { label: 'Home', path: '/Escuelas/Leyes_de_reforma' },
    { label: 'Ventas', path: '/Escuelas/Leyes_de_reforma/Ventas' },
    { label: 'Contact', path: '/Escuelas/contact' }
  ];
  

const Index = () => {
  return (
    <div>
      <DrawerAppBar titulo='Leyes de reforma' routes={routes} />
    </div>
  )
}

export default Index
