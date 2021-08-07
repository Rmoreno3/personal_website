import React from 'react';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonio from '../components/Testimonio';
import '../assets/styles/index.scss';

const Home = () => (
  <Wrapper>
    <Header />
    <Hero />
    <Testimonio />
  </Wrapper>
);

export default Home;
