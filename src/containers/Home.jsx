import React from 'react';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonio from '../components/Testimonio';
import Proyect from '../components/Proyect';
import '../assets/styles/index.scss';
import imageProyect from '../assets/static/images/platziconf.png';
import platzifood from '../assets/static/images/platzifood.png';

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
      title='PlatziConf Hawaii'
      tag1='HTML'
      tag2='CSS'
      tag3=''
      image={platzifood}
      info='Pagina Web de comida rapida, PlatziFood'
      codigo='https://github.com/Rmoreno3/PlatziFood'
      pagina='https://rmoreno3.github.io/PlatziFood/'
    />
  </Wrapper>
);

export default Home;
