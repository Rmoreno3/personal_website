import React from 'react';
import logo from '../assets/static/images/logo.png';

const Header = () => (
  <header className='header'>
    <div className='wrapper'>
      <div className='header__content'>
        <figure className='header__logo_container'>
          <img src={logo} alt='logo' />
        </figure>
        <nav className='header__nav'>
          <ul>
            <li className='link'>
              <a aria-label='Hola' href='#hero'>
                Hola
              </a>
            </li>
            <li className='link'>
              <a href='#proyectos' aria-label='Proyectos'>
                Proyectos
              </a>
            </li>
            <li className='link'>
              <a href='#contacto' aria-label='Hablemos'>
                Hablemos
              </a>
            </li>
          </ul>
        </nav>
        <a href='https://docs.google.com/document/d/1-Z0kdvRDF4WmYlnBiX_VLSrKsO16z6nUKhu7em5e38Q/edit?usp=sharing' target='_blank' rel='noreferrer'>
          <button className='btn-primary' aria-label='Curriculum' type='button'>
            Curriculum
          </button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
