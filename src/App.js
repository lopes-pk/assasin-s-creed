import './App.css';
import React from 'react';
import logo from './logo.png';
import xboxIcon from './xbox-icon.svg';
import steamIcon from './steam-icon.svg';
import imagemDeFundo from './background-home.png';
import efeitoFundo from './effectBg.png';
import efeitoFundo2 from './effectTwo.png';

export default function App() {
  return (
    <div className="h-screen w-full">
      <div>
        <img src={imagemDeFundo} alt="imagem de fundo" className="w-full h-[110vh] bg-no-repeat absolute z-0" />
        <img src={efeitoFundo} alt="efeito" className="w-full h-[110vh] absolute z-0" />
        <img src={efeitoFundo2} alt="sssssss" className="w-full h-[110vh] absolute z-0" />
      </div>
      <header className="flex px-16 pt-10 justify-between z-10 absolute w-full">
        <img src={logo} width="240px" height="80px" alt="Logo no cabeçalho da pagina" />
        <nav className="text-white font-primary uppercase font-bold text-sm flex gap-9 tracking-widest">
          <a href="/" alt="main">main</a>
          <a href="/" alt="about">about</a>
          <a href="/" alt="game features">game features</a>
          <a href="/" alt="system requirements">system requirements</a>
          <a href="/" alt="subscribe">subscribe</a>
        </nav>
        <div className="flex">
          <select className="uppercase font-primary font-bold text-white bg-transparent h-6 flex items-start outline-none  tracking-widest text-sm rounded-none pr-2 pt-[1px] ">
            <option className=" text-zinc-800 text-center">eng</option>
            <option className=" text-zinc-800 text-center">brl</option>
          </select>
          <span className="mx-4 bg-white h-7 mt-[-2px] w-[1px]" />
          <div className="flex gap-5">

            <a href="/" alt=""><img src={xboxIcon} alt="logo xbox" /></a>
            <a href="/" alt=""><img src={steamIcon} alt="logo steam" /></a>
          </div>
        </div>
      </header>
    </div>
  );
}
