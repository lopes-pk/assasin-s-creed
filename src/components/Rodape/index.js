import React from 'react';
import logo from './logo.png';
import logoFacebook from './facebook.svg';
import logoTwitter from './twitter.svg';
import logoYT from './Vector.svg';
import logoTwitch from './twitch.svg';

export default function Rodape() {
  return (
    <footer className="relative bg-[rgb(9,10,11)]">
      <nav className="mb-4 text-white flex items-baseline uppercase font-bold font-primary justify-evenly text-xs">
        <img src={logo} alt="Logo do rodapé" className="h-16" />
        <div className="flex gap-8">
          <a href="#home">home</a>
          <a href="#aboutSection">about</a>
          <a href="#featuresSection">game features</a>
          <a href="#requirementsSection">system requirements</a>
          <a href="#subscribeSection">subscribe</a>
        </div>
        <div className="flex gap-4 hover:cursor-pointer">
          <a href="/"><img src={logoFacebook} alt="logo facebook" className="h-6 w-6" /></a>
          <a href="/"><img src={logoTwitter} alt="logo twitter" className="h-6 w-6" /></a>
          <a href="/"><img src={logoYT} alt="logo youtube" className="h-6 w-6" /></a>
          <a href="/"><img src={logoTwitch} alt="logo twitch" className="h-6 w-6" /></a>

        </div>
      </nav>
      <span className="absolute left-[5%] r-0 t-0 b-0 max-w-[90%] w-full bg-gray-500 h-[1px]" />
      <div className="mt-10 pb-12 flex justify-center gap-[33rem] uppercase font-primary text-xs">
        <p href="/" className="font-light text-gray-400">All Rights Reserved @faizansayani</p>
        <a href="/" className="font-bold text-white">Privacy Policy | Terms of Services | Code of Conduct </a>
      </div>
    </footer>
  );
}
