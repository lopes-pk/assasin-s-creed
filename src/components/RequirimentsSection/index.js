import Background from 'components/Background';
import React from 'react';
import background from './backgroundRequirements.png';
import effectBackground from './backgroundEffectRequirements.png';
import requirements from './requirements.png';

export default function RequirimentsSection() {
  return (
    <section className="relative" id="requirementsSection">
      <span className="absolute z-10 -top-10 w-full h-24 bg-black blur-xl" />
      <Background
        img={background}
        altura="100vh"
        largura="100%"
        effectOne={effectBackground}

      />
      <header className="relative text-center font-secundary pt-24 text-white">
        <h3 className="text-xl tracking-wider">Can My Computer Run this game?</h3>
        <h2 className="text-6xl tracking-wider">system requirements</h2>
      </header>
      <img src={requirements} alt="Requirementos de processamento para rodar o jogo" className=" mt-20 ml-20 h-[290px] w-[420px] relative" />
    </section>

  );
}
