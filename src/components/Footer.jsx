import React from 'react';
import logo from '../assets/static/images/logo.png';

const Footer = () => (
  <footer>
    <div className='footer-container'>
      <div className='footer-logo'>
        <figure className='header-logo_container logito'>
          <img src={logo} alt='logo' />
        </figure>
      </div>
      <div className='footer-info'>
        <p>Powered By 🖤 Reynaldo Moreno</p>
        <p>
          Copyright 2021 - Todos los derechos reservados.
        </p>
      </div>
      <div className='social ocultar'>
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
  </footer>
);

export default Footer;
