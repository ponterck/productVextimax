
import { Box } from '@mui/material';
import Titulo from './Properties/Titulo';
import Seleccion_Escuela from './Seleccion_Escuela';


const ContainerBase = () => {
  return (
    <div className='bg-[F8F8F8] w-full p-5'>
        <Box  className='inline-block'>
            <Titulo/>
        </Box>
      
        <Box>
            <Seleccion_Escuela/>
        </Box>
    </div>
  );
};

export default ContainerBase;
