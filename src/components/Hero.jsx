import React from 'react';
import reynaldo from '../assets/static/images/reynaldo.png';

const Hero = () => (
  <>
    <main id='hero'>
      <section className='hero'>
        <figure className='hero__content__image'>
          <img src={reynaldo} alt='Imagen de Reynaldo' />
        </figure>
        <div className='hero__content__description'>
          <div className='hero__content__description--title'>
            <span>¡Hola a todos!</span>
            <h1>Soy Reynaldo Moreno</h1>
          </div>
          <div className='hero__content__description--info'>
            <p>
              Frontend Developer Jr que le encanta implementar diseños que inspiren, atraigan y den soluciones a las personas.
            </p>
          </div>
          <div className='hero__content__description--social'>
            <a href='https://www.linkedin.com/in/reynaldo-moreno-2abab11b6/' target='_blank' rel='noreferrer'>
              <i className='fab fa-linkedin btn-icon' />
            </a>
            <a href='https://www.instagram.com/reynaldom31/' target='_blank' rel='noreferrer'>
              <i className='fab fa-instagram-square btn-icon' />
            </a>
            <a href='https://twitter.com/Rmoreno_31' target='_blank' rel='noreferrer'>
              <i className='fab fa-twitter btn-icon' />
            </a>
            <a href='https://github.com/Rmoreno3' target='_blank' rel='noreferrer'>
              <i className='fab fa-github btn-icon' />
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Hero;
