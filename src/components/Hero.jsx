import React from 'react';

const Hero = () => (
  <>
    <main id='hero'>
      <section className='hero'>
        <div className='hero-content-image'>
          <figure>
            <img src='./assets/images/user.png' alt='Imagen de Juan' />
          </figure>
        </div>
        <div className='hero-content-description'>
          <div className='hero-title'>
            <span>¡Hola a todos!</span>
            <h1>Soy Jaume</h1>
          </div>
          <div className='hero-info'>
            <p>
              Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.
            </p>
          </div>
          <div className='hero-social'>
            <a href='tel:+584142537845'>
              <button className='btn-icon' aria-label='Numero de telefono' type='button'>
                <img src='./assets/icons/icon-phone.svg' alt='Icono de llamada' />
              </button>
            </a>
            <a href='tel:+584142537845'>
              <button className='btn-icon' aria-label='Correo electronico' type='button'>
                <img src='./assets/icons/email.svg' alt='Icono de correo' />
              </button>
            </a>
            <a href='tel:+584142537845'>
              <button className='btn-icon' aria-label='Instagram' type='button'>
                <img src='./assets/icons/icon-instagram.svg' alt='Icono de instagram' />
              </button>
            </a>
            <a href='tel:+584142537845'>
              <button className='btn-icon' aria-label='Twitter' type='button'>
                <img src='./assets/icons/icon-twitter_squared.svg' alt='Icono de twitter' />
              </button>
            </a>
          </div>
          <a href='/'>
            <button className='btn-primary descarga' aria-label='Descargar curriculum' type='button'>
              Descargar Curriculum
            </button>
          </a>
        </div>
      </section>
    </main>
  </>
);

export default Hero;
