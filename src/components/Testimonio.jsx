import React from 'react';
import flecha from '../assets/static/icons/icons-down.svg';

const Testimonio = () => (
  <section className='testimonio'>
    <div className='testimonio__container'>
      <div className='testimonio__container--info'>
        <p>
          En mi camino como Front-End Developer Jr he podido realizar proyectos retadores e increíbles.
        </p>
      </div>
      <div className='testimonio__container--mensaje'>
        <p>
          Aquí hay algunos que me gustaría compartir.
        </p>
      </div>
      <figure>
        <img src={flecha} alt='Flecha hacia abajo' />
      </figure>
    </div>
  </section>
);

export default Testimonio;
