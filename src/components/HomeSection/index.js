/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Background from 'components/Background';
import imagemDeFundo from './background-home.png';
import efeitoFundo from './effectBg.png';
import efeitoFundo2 from './effectTwo.png';
import botaoDeComprar from './buttonPurchase.png';
import scrollButton from './scrollButton.png';

export default function HeroSection() {
  function scrollPage() {
    if (window.scrollY < 588) {
      window.scrollTo({
        top: 689,
        behavior: 'smooth',
      });
    }
  }
  return (
    <div className="h-screen w-full">
      <Background
        img={imagemDeFundo}
        effectOne={efeitoFundo}
        effectTwo={efeitoFundo2}
        altura="110vh"
        largura="100%"
      />
      <div className="flex flex-col items-center absolute -bottom-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
        <h1 className="font-secundary font-bold uppercase text-7xl -tracking-tight">SURVIVE AT ALL COSTS</h1>
        <h3 className=" text-[22px] font-secundary -tracking-tighter">Experience new assasin's creed valhalla</h3>
        <div style={{ backgroundImage: `url(${botaoDeComprar})` }} className="bg-contain w-56 h-14 bg-no-repeat mt-12 hover:cursor-pointer" />
        <div
          className="mt-14 flex items-center flex-col font-primary uppercase text-xs  mb-1"
        >
          <p className="text-center">the story</p>
          <button
            type="button"
            className="hover: cursor-pointer pb-1 mx-auto"
            onClick={() => (
              scrollPage()
            )}
          >
            <img
              src={scrollButton}
              className="mt-2 h-3 w-6 bg-cover bg-no-repeat animate-bounce"
              alt="Imagem de seta para scrollar a página"
            />
          </button>
        </div>
      </div>
      <span className="absolute z-10 -bottom-14 w-full -left-5 h-24 bg-gray-950 blur-2xl" />
    </div>
  );
}
