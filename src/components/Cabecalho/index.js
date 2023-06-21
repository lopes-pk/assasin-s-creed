import React from 'react';
import logo from './logo.png';
import xboxIcon from './xbox-icon.svg';
import steamIcon from './steam-icon.svg';

export default function Cabecalho() {
  return (
    <div id="home">
      <header className="flex px-16 pt-10 justify-between z-10 absolute w-full">
        <img
          src={logo}
          width="240px"
          height="80px"
          alt="Logo no cabeçalho da pagina"
        />
        <nav className="text-white font-primary uppercase font-bold text-sm flex gap-9 tracking-widest h-4">
          <a href="#home" alt="main" className="hover:opacity-70 duration-100 ease-linear">
            main
          </a>
          <a href="#aboutSection" alt="about" className="hover:opacity-70 duration-100 ease-linear">
            about
          </a>
          <a href="#featuresSection" alt="game features" className="hover:opacity-70 duration-100 ease-linear">
            game features
          </a>
          <a href="#requirementsSection" alt="system requirements" className="hover:opacity-70 duration-100 ease-linear">
            system requirements
          </a>
          <a href="#subscribeSection" alt="subscribe" className="hover:opacity-70 duration-100 ease-linear">
            subscribe
          </a>
        </nav>
        <div className="flex ">
          <select className="uppercase font-primary font-bold text-white bg-transparent h-6 flex items-start outline-none  tracking-widest text-sm rounded-none pr-2 pt-[1px] ">
            <option className=" text-zinc-800 text-center">eng</option>
            <option className=" text-zinc-800 text-center">brl</option>
          </select>
          <span className="mx-4 bg-white h-7 mt-[-2px] w-[1px]" />
          <div className="flex gap-5 h-4">
            <a href="/" alt="">
              <img src={xboxIcon} alt="logo xbox" className="hover:opacity-70 duration-100 ease-linear" />
            </a>
            <a href="/" alt="">
              <img src={steamIcon} alt="logo steam" className="hover:opacity-70 duration-100 ease-linear" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
