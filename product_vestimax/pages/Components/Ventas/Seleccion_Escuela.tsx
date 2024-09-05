
import { Grid } from '@mui/material';
import GridBase from './Properties/Grid-Base';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';




const Seleccion_Escuela = () => {
  return (
    <>
      <Grid className='p-2' container spacing={10}>
        {/* Primer Grid (fila superior) */}
        <Grid item xs={12} sm={6}>
          <GridBase 
            icon={SchoolIcon} 
            title="Martha Letica Lumbera"
            description="Complete el formulario a continuación para realizar su compra"
            icon2={GroupAddIcon}
            subtitle='Agregar'
            link='Escuelas/Martha_Leticia'
            // http://localhost:3000/Escuelas/Martha_Leticia
          />
        </Grid>

        {/* Segundo Grid (fila superior) */}
        <Grid item xs={12} sm={6}>
          <GridBase 
            icon={SchoolIcon} 
            title="Leyes de reforma"
            description="Complete el formulario a continuación para realizar su compra"
            icon2={GroupAddIcon}
            subtitle='Agregar'
            link='Escuelas/Leyes_de_reforma'
          />
        </Grid>

        {/* Tercer Grid (fila inferior) */}
        <Grid item xs={12} sm={6}>
          <GridBase 
            icon={SchoolIcon} 
            title="Miguel Bernal jimenez"
            description="Complete el formulario a continuación para realizar su compra"            
            icon2={GroupAddIcon}
            subtitle='Agregar'
          />
        </Grid>

        {/* Cuarto Grid (fila inferior) */}
        <Grid item xs={12} sm={6}>
          <GridBase 
            icon={SchoolIcon}
            title="Vasco de Quiroga"
            description="Complete el formulario a continuación para realizar su compra"            
            icon2={GroupAddIcon}
            subtitle='Agregar'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Seleccion_Escuela;
