import React from 'react'
import Carrosel from './Carrosel'

export default function () {
  const frases = [
    "Voce nao controla a velocidade do progresso, mas controla continuar avancando um passo por dia. - Para frase inspirada no livro Habitos Atomicos, de James Clear",
    "A unica limitacao que o homem tem esta em sua propria mente. - Napoleon Hill (A Lei do Triunfo)",
    "Se voce nao gostar do capitulo atual, lembre-se: voce ainda e o autor.",
    "Seu ambiente molda suas acoes. Transforme o ambiente e voce transforma sua vida. - Ideia baseada no livro Habitos Atomicos, de James Clear",
    "Foque no que voce consegue fazer hoje, nao no que deixou de fazer ontem. - Ideia inspirada no livro Mindset, de Carol Dweck",
    "Voce nao precisa vencer o mundo hoje. Precisa apenas vencer a si mesmo um pouco mais do que ontem.",
    "Seus objetivos nao mudam sua vida. Seus habitos mudam. - Para frase inspirada em James Clear"
  ]

  return (
    <div>
      <h2 className='text-2xl font-medium text-center mt-24 text-zinc-900 '>
        Frases Motivacionais
      </h2>
      <Carrosel frases={frases}  />
    </div>
  )
}
