/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Navigation, Pagination, EffectCards } from 'swiper';
import Background from 'components/Background';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgAbout from './bgAbout.png';
import bgAboutEffectOne from './bgAboutEffectOne.png';
import bgAboutEffectTwo from './bgAboutEffectTwo.png';
import primeiraImageSlide from './firstImg.png';
import segundaImageSlide from './secondImg.png';
import terceiraImageSlide from './terceiramg.png';

export default function AboutSection() {
  const fotoSlide = [
    primeiraImageSlide,
    segundaImageSlide,
    terceiraImageSlide,
  ];
  return (
    <div className="flex items-center realtive w-full h-screen" id="aboutSection">

      {/* Background Config */}
      <Background
        img={bgAbout}
        effectOne={bgAboutEffectOne}
        effectTwo={bgAboutEffectTwo}
        altura="100vh"
        largura="100%"
      />

      <section className="text-white w-full items-center mx-16 grid grid-cols-2">
        {/* Sobre Assasin's Creed Valhala */}
        <div className="z-10">
          <h3 className="font-secundary text-lg tracking-widest">What is acv?</h3>
          <h2 className="border-b-2 w-[88%] border-b-white font-secundary text-6xl tracking-wider font-bold uppercase">
            assassin’s creed
            {' '}
            valhalla
          </h2>
          <p className="font-primary font-[300] text-sm pl-20 pt-6 w-[26.4rem]">
            When focusing on the main objectives, Assassin's Creed Valhalla is about 59½ Hours in length. If you're a gamer that strives to see all aspects of the game, you are likely to spend around 136 Hours to obtain 100% completion.
            <br />
            <br />
            once you start getting comfortable with the world and the changes needed to play
            {' '}
            <strong className="border-b-4 border-b-buttonPurchase">stealthily.</strong>
          </p>

        </div>
        {/* Slides com fotos do game */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, EffectCards]}
            slidesPerView={1}
            navigation
            style={{ maxWidth: '320px' }}
            pagination={{ clickable: true }}
            effect="cards"
          >
            {fotoSlide.map((slide, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <img src={slide} width={320} height={300} alt="slide" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
}
