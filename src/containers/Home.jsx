import React from 'react';

import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonio from '../components/Testimonio';
import Proyect from '../components/Proyect';
import Footer from '../components/Footer';
import '../assets/styles/index.scss';

import imageProyect from '../assets/static/images/platziconf.jpg';
import baterias from '../assets/static/images/baterias.jpg';
import platzifood from '../assets/static/images/platzifood.jpg';
import simon from '../assets/static/images/simonDice.jpg';
import tatto from '../assets/static/images/tatto.jpg';
import blog from '../assets/static/images/blog.jpg';
import cajas from '../assets/static/images/cajas.jpg';
import rick from '../assets/static/images/rickymorty.jpg';
import pugstagram from '../assets/static/images/pugstagram.jpg';
import crypto from '../assets/static/images/crypto.jpg';
import portfolio from '../assets/static/images/portfolio.jpg';

const Home = () => (
  <Wrapper>
    <Header />
    <Hero />
    <Testimonio />
    <Proyect
      title='Enerjet Venezuela'
      tag1='HTML | '
      tag2='CSS | '
      tag3='Wordpress'
      image={baterias}
      info='Creacion de la pagina web de la distribuidora de baterias N°1 de Venezuela, Enerjet Venezuela'
      codigo=''
      pagina='https://enerjet.com.ve/'
    />
    <Proyect
      title='PlatziConf Hawaii'
      tag1='HTML | '
      tag2='CSS | '
      tag3='Bootstrap'
      image={imageProyect}
      info='Pagina web (Clon), de PlatziConf Hawaii.'
      codigo='https://github.com/Rmoreno3/PlatziConfHawaii'
      pagina='https://rmoreno3.github.io/PlatziConfHawaii/'
    />
    <Proyect
      title='PlatziFood'
      tag1='HTML | '
      tag2='CSS'
      image={platzifood}
      info='Pagina Web de comida rapida, PlatziFood'
      codigo='https://github.com/Rmoreno3/PlatziFood'
      pagina='https://rmoreno3.github.io/PlatziFood/'
    />
    <Proyect
      title='Simon Dice'
      tag1='HTML | '
      tag2='CSS | '
      tag3='JavaScript'
      image={simon}
      info='Juego de Simon Dice, donde se debe repetir la secuencia de colores.'
      codigo='https://github.com/Rmoreno3/GameJs'
      pagina='https://rmoreno3.github.io/GameJs/'
    />
    <Proyect
      title='Tatto '
      tag1='HTML | '
      tag2='CSS | '
      tag3='Foundation'
      image={tatto}
      info='Landin page de una e-commerce de venta de Tatuajes falsos.'
      codigo='https://github.com/Rmoreno3/Foundation'
      pagina='https://rmoreno3.github.io/Foundation/'
    />
    <Proyect
      title='Blog Personal'
      tag1='HTML | '
      tag2='CSS'
      image={blog}
      info='Maquetacion de un Blog Personal, para uso de cualquien persona.'
      codigo='https://github.com/Rmoreno3/BlogPersonal'
      pagina='https://rmoreno3.github.io/BlogPersonal/'
    />
    <Proyect
      title='Brand'
      tag1='HTML | '
      tag2='CSS'
      image={cajas}
      info='Landin page de una e-commerce de venta de cajas para gatos y humanos'
      codigo='https://github.com/Rmoreno3/DigitalProduct'
      pagina='https://rmoreno3.github.io/DigitalProduct/'
    />
    <Proyect
      title='Rick & Morty'
      tag1='HTML | '
      tag2='CSS | '
      tag3='JavaScript'
      image={rick}
      info='Creacion de una SPA con JavaScript Vanilla, y consumo de la API de Rick & Morty'
      codigo='https://github.com/Rmoreno3/single-page'
      pagina='https://rmoreno3.github.io/single-page/'
    />
    <Proyect
      title='Pugstagram'
      tag1='HTML | '
      tag2='CSS | '
      tag3='Svelte'
      image={pugstagram}
      info='Landing page clon de Instagram, una red social echa para Pugs'
      codigo='https://github.com/Rmoreno3/pugstagram'
      pagina='https://60b91623f446a20e66b493ca--tender-montalcini-a01aa5.netlify.app/'
    />
    <Proyect
      title='Platzi Exchange'
      tag1='HTML | '
      tag2='CSS | '
      tag3='Vue'
      image={crypto}
      info='Aplicacion Web de cryptomonedas, para ver el valor de las diferentes crypto y sus estadisticas'
      codigo='https://github.com/Rmoreno3/Proyect-Crypto'
      pagina='https://rmoreno3.github.io/Proyect-Crypto/'
    />
    <Proyect
      title='Portafolio Jaume'
      tag1='HTML | '
      tag2='CSS'
      image={portfolio}
      info='Plantilla de un portafolio, elaborada para ser usada por culaquier persona'
      codigo='https://github.com/Rmoreno3/Portafolio'
      pagina='https://rmoreno3.github.io/Portafolio/'
    />
    <Footer />
  </Wrapper>
);

export default Home;
