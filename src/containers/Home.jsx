import React from 'react';

import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonio from '../components/Testimonio';
import Proyect from '../components/Proyect';
import '../assets/styles/index.scss';

import imageProyect from '../assets/static/images/platziconf.png';
import platzifood from '../assets/static/images/platzifood.png';
import simon from '../assets/static/images/simonDice.png';
import tatto from '../assets/static/images/tatto.png';
import blog from '../assets/static/images/blog.png';
import cajas from '../assets/static/images/cajas.png';
import rick from '../assets/static/images/rickymorty.png';

const Home = () => (
  <Wrapper>
    <Header />
    <Hero />
    <Testimonio />
    <Proyect
      title='PlatziConf Hawaii'
      tag1='HTML'
      tag2='CSS'
      tag3='Bootstrap'
      image={imageProyect}
      info='Pagina web (Clon), de PlatziConf Hawaii.'
      codigo='https://github.com/Rmoreno3/PlatziConfHawaii'
      pagina='https://rmoreno3.github.io/PlatziConfHawaii/'
    />
    <Proyect
      title='PlatziFood'
      tag1='HTML'
      tag2='CSS'
      image={platzifood}
      info='Pagina Web de comida rapida, PlatziFood'
      codigo='https://github.com/Rmoreno3/PlatziFood'
      pagina='https://rmoreno3.github.io/PlatziFood/'
    />
    <Proyect
      title='Simon Dice'
      tag1='HTML'
      tag2='CSS'
      tag3='JavaScript'
      image={simon}
      info='Juego de Simon Dice, donde se debe repetir la secuencia de colores.'
      codigo='https://github.com/Rmoreno3/GameJs'
      pagina='https://rmoreno3.github.io/GameJs/'
    />
    <Proyect
      title='Tatto '
      tag1='HTML'
      tag2='CSS'
      tag3='Foundation'
      image={tatto}
      info='Landin page de una e-commerce de venta de Tatuajes falsos.'
      codigo='https://github.com/Rmoreno3/Foundation'
      pagina='https://rmoreno3.github.io/Foundation/'
    />
    <Proyect
      title='Blog Personal'
      tag1='HTML'
      tag2='CSS'
      tag3=''
      image={blog}
      info='Maquetacion de un Blog Personal, para uso de cualquien persona.'
      codigo='https://github.com/Rmoreno3/BlogPersonal'
      pagina='https://rmoreno3.github.io/BlogPersonal/'
    />
    <Proyect
      title='Brand'
      tag1='HTML'
      tag2='CSS'
      tag3=''
      image={cajas}
      info='Landin page de una e-commerce de venta de cajas para gatos y humanos'
      codigo='https://github.com/Rmoreno3/DigitalProduct'
      pagina='https://rmoreno3.github.io/DigitalProduct/'
    />
    <Proyect
      title='Rick & Morty'
      tag1='HTML'
      tag2='CSS'
      tag3='JavaScript'
      image={rick}
      info='Creacion de una SPA con JavaScript Vanilla, y consumo de la API de Rick & Morty'
      codigo='https://github.com/Rmoreno3/single-page'
      pagina='https://rmoreno3.github.io/single-page/'
    />
  </Wrapper>
);

export default Home;
