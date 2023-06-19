import './App.css';
import React from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import AboutSection from 'components/AboutSection';
import FeaturesSection from 'components/FeaturesSection';
import RequirimentsSection from 'components/RequirimentsSection';
import NewsletterSection from 'components/NewsletterSection';
import Rodape from 'components/Rodape';
import HomeSection from './components/HomeSection';
import Cabecalho from './components/Cabecalho';

export default function App() {
  return (
    <>
      <Cabecalho />
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <RequirimentsSection />
      <NewsletterSection />
      <Rodape />
    </>
  );
}
