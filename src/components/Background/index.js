import React from 'react';

export default function Background({
  // eslint-disable-next-line react/prop-types
  img, effectOne, effectTwo, altura, largura,
}) {
  return (
    <div className="w-full h-screen absolute z-0">
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: altura,
          width: largura,
        }}
        alt="imagem de fundo"
        className="bg-cover bg-no-repeat absolute z-0"
      />
      <span
        style={{
          backgroundImage: `url(${effectOne})`,
          height: altura,
          width: largura,
        }}
        alt="efeito"
        className="absolute z-0 bg-cover"
      />
      <span
        style={{
          backgroundImage: `url(${effectTwo})`,
          height: altura,
          width: largura,
        }}
        alt="sssssss"
        className="w-full absolute z-0"
      />
    </div>
  );
}
