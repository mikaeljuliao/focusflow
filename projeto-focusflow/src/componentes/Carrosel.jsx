import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Carrosel({ frases }) {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
   
      setIndex((proximaFrase) =>
       (proximaFrase + 1) % frases.length
      )

    }, 5000); // 4 segundos

    return () => clearInterval(interval); // limpar intervalo quando desmontar
  },  [frases.length]);


  const proximaFrase = () => {
    setIndex((index + 1) % frases.length);
  };

  const fraseAnterior = () => {
    setIndex((index - 1 + frases.length) % frases.length);
  };

  return (
    <div className="relative w-1/2 m-auto h-[230px] md:h-[260px] overflow-hidden 
    flex items-center justify-center p-4 pb-11 ">
      
      <p
        className="text-center text-lg md:text-xl font-medium transition-all px-6 mt-2 duration-500 ease-in-out"
      >
        {frases[index]}
      </p>

      {/* Botão anterior */}
      <button
        onClick={fraseAnterior}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-sky-800 bg-opacity-60 hover:bg-opacity-80
         text-white px-2 py-1 rounded-full"
      >
        ←
      </button>

      {/* Botão próximo */}
      <button
        onClick={proximaFrase}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-800 bg-opacity-60 
        hover:bg-opacity-80 text-white px-2 py-1 rounded-full"
      >
        →
      </button>
    </div>
  );
}
