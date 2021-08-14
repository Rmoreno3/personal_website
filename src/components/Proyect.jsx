import React from 'react';

const Proyect = (props) => {
  const { title, info, codigo, pagina, image, tag1, tag2, tag3 } = props;
  return (
    <section className='proyect' id='proyectos'>
      <div className='proyect-img'>
        <figure className='proyect-img__container'>
          <img src={image} alt='Imagen de proyecto' />
        </figure>
      </div>
      <div className='proyect-info'>
        <a className='proyect-title' href='/'>{title}</a>
        <p>{info}</p>
        <div className='proyect-info--tags'>
          <span className='tag'>{tag1}</span>
          <span className='tag'>{tag2}</span>
          <span className='tag'>{tag3}</span>
        </div>
        <a href={codigo}>
          <button className='btn-secondary descarga' aria-label='Ver codigo' type='button'>Ver Codigo</button>
        </a>
        <a href={pagina}>
          <button className='btn-primary descarga' aria-label='Ver proyecto' type='button'>Ver Proyecto</button>
        </a>
      </div>
    </section>
  );
};

export default Proyect;
