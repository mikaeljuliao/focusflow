import React from 'react'

export default function Objetivos() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center '>
        <div className='w-1/2  flex flex-col px-4 py-6  gap-3'>
          <h1 className='text-2xl text-center font-bold py-8'>Objetivos e metas principais</h1>
          <p className='text-start w-3/4 text-lg  text-zinc-700 py-5 '>Nesse campo 
          digite seus objetios e metas e em quando tempo quer alcançalas.
            lembresse sempre de suas metas!
          </p>


         <label htmlFor="seuObjetivo" className=' text-zinc-700 text-lg'>Digite seu objetivo principal</label>
         <input type="text" placeholder='Qual seu obejtivo principal?' id="seuObjetivo" 
         className='py-3 pl-3'/>
         <label for="data-selecionada"className=' text-zinc-700 text-lg'>Selecione uma data pra esse objetivo:</label>
         <input type="date" id="data-selecionada" name="data-evento"
         className='py-3 pl-3'/>

        <label htmlFor="SegundoObjetivo"className=' text-zinc-700 text-lg'>Digite seu segundo obejetivo!</label>
        <input type="text" placeholder='Qual seu obejtivo principal?' id="SegundoObjetivo"
        className='py-3 pl-3' />
        <label for="data-selecionada"className=' text-zinc-700 text-lg'>Selecione uma data pra esse objetivo:</label>
        <input type="date" id="data-selecionada" name="data-evento"
        className='py-3 pl-3'/>

        </div>

  <div className='w-1/2  flex flex-col px-4 py-6  gap-3'>
       
        </div>
    </div>
  )
}
