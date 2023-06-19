/* eslint-disable max-len */
import React from 'react';
import imagemNewsletter from './imageNewsletter.png';
import efeitoImagemNewsletter from './efeitoImagemNewsletter.png';

export default function NewsletterSection() {
  return (
    <section className="bg-[rgb(7,8,8)] w-full h-[110vh] flex items-center justify-center" id="subscribeSection">
      {/* Imagem Newsletter */}
      <div className="relative">
        <img src={imagemNewsletter} alt="imagem de fundo da newsletter" className="absolute w-[260px] h-[420px]" />
        <img src={efeitoImagemNewsletter} alt="efeito da imagem" className="relative z-10 w-[260px] h-[420px]" />
      </div>
      {/* Descrição Newsletter */}
      <div className="ml-20">
        <div className="text-white">
          <h3 className="font-secundary text-xl tracking-wider">Want to stay in touch?</h3>
          <h1 className="font-secundary text-6xl tracking-wider">newsletter SUBSCRIBE </h1>
          <p className="font-primary font-light mt-3 text-base">
            In order to start receiving our news, all you have to do is enter your email
            <br />
            address. Everything else will be taken care of by us. We will send you
            {' '}
            <br />
            {' '}
            emails containing information about game. We don’t spam.
          </p>
        </div>
        <div className="mt-14">
          <input type="text" placeholder="Your email address" className="p-4 w-[16.4rem] bg-[rgb(22,23,24)] rounded-md text-white text-xs placeholder-gray-500" />
          <button type="button" className="py-4 bg-buttonPurchase rounded-md px-10 text-black font-primary font-bold text-xs ml-4">Subscribe now</button>
        </div>
      </div>
    </section>
  );
}
