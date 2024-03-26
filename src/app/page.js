import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container-fluid p-4">
      <div className='menuHeader'>
        <Image 
            src={`/imgs/ux-ui.png`}
            alt="logo"
            priority={true}
            width={100}
            height={50}
            style={{objectFit: 'cover'}}
        />
      </div>
      <div className='titulo-header text-center'>
        <h1>
          <strong>DESCUBRE EL ARTE DE LA EXPERIENCIA DIGITAL</strong>
        </h1>
        <Image 
            src={`/imgs/banner-portafolio.jpg`}
            fill={true}
            alt="logo"
            priority={true}
            style={{objectFit: 'cover', top: '50%', zIndex: -2}}
            className='banner'
        />
        <span>
          Bienvenido a mi portafolio donde la <br /> 
          creatividad se encuentra con la <br />
          funcionalidad
        </span>
      </div>
    </div>
  )
}
