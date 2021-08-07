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
            <li>
              <a aria-label='Hola' href='#hero'>
                Hola
              </a>
            </li>
            <li>
              <a href='#proyectos' aria-label='Proyectos' className='link'>
                Proyectos
              </a>
            </li>
            <li>
              <a href='#contacto' aria-label='Hablemos' className='link'>
                Hablemos
              </a>
            </li>
          </ul>
        </nav>
        <a href='/'>
          <button className='btn-primary' aria-label='Curriculum' type='button'>
            Curriculum
          </button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
