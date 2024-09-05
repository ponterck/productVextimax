import ConainerBase from './Components/Login/Properties/Conainer_Base';

import shadow from '@/pages/asset/img/circulo.png' 
import Image from 'next/image';


const containerStyles = 'relative w-full h-screen bg-gradient-to-b from-greenStart via-greenStart/2 to-greenEnd flex items-center justify-center';
const imageStyles = 'absolute top-0 left-0';

export default function Home() {
  return (
    <
    >
      <div className={containerStyles}>

        <Image src={shadow} className={imageStyles} alt='shadow'/> 
        <ConainerBase/>
        
      </div>
      
    </>
  );
}
