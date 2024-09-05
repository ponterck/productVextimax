import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import Link from 'next/link';

interface GridBaseProps {
  icon: SvgIconComponent; 
  title: string;
  subtitle?: string;
  icon2?: SvgIconComponent; 
  description?: string;
  iconStyles?: React.CSSProperties; 
  link?: string;
}

const GridBase: React.FC<GridBaseProps> = ({ icon: Icon, title, description, iconStyles, subtitle, icon2: Icon2, link }) => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: '8px', 
        overflow: 'hidden', 
        backgroundColor: 'white', 
        boxShadow: 3, 
        padding: 2, 
        display: 'flex',
        flexDirection: 'row',  
        width: '100%', 
        height: '15.5rem'
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          width: '15rem', 
          height: '100%',
          display: 'flex',
          borderRadius: '10px',
          justifyContent: 'center', 
          background: '#753BBD',
          padding: '5px',
          alignContent:"center",
          alignItems:"center"
        }}
      >
        <Icon
          sx={{
            fontSize: '3.5rem', 
            color: 'white', 
            ...iconStyles, 
          }}
        />
      </Box>
      <Box sx={{ padding: 1 }}>
        <Typography sx={{fontSize:"1.5rem"}}>
          {title}
        </Typography>
        
        <Typography sx={{fontSize:".9rem"}}>
          {description}
        </Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "left", padding: "10px" }}>
        <Link href={link || '#'} passHref>
            <Box sx={{ background: "#2DCCD3", display: "inline-block", justifyContent: "center", borderRadius: "8px", height: "7.5rem", width: "10rem", alignContent:"center", cursor: 'pointer' }}>
              <Container className='flex justify-center p-1 align-middle'>
                {Icon2 && (
                  <Icon2
                    sx={{ fontSize: '2rem', color: 'white' }}
                  />
                )}
              </Container>
              <Typography sx={{ color: "white", padding: "2", textAlign: "center" }}>{subtitle}</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default GridBase;
