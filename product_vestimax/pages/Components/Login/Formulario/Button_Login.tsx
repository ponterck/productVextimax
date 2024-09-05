import React from 'react';
import { Button, Link  as MuiLink} from '@mui/material';
import Link from 'next/link';

const buttonStyles = {
  background: "#753BBD",
  color: "white",
  fontWeight: "600",
  marginTop: "15px",
  width: "100%",
  borderRadius: "8px"
};

interface ButtonLoginProps {
  onClick?: () => void;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ onClick }) => {


  return (
    <div className="flex flex-col w-full p-4">
      <div className='w-full p-1'>
        <Link href="/Home" passHref>
          <Button sx={buttonStyles} onClick={onClick}>
            Iniciar sesión
          </Button>
        </Link>

      </div>
      <div className='w-full p-2 flex justify-center'>
        <MuiLink component="button" variant="body2" >
          Olvidaste tu contraseña
        </MuiLink>
      </div>
    </div>
  );
};

export default ButtonLogin;
