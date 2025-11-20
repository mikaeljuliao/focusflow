import React from 'react'


export default function Header() {
  return (
    <header className="w-full flex items-center justify-center bg-zinc-100 py-5"> 
      <div className="max-w-3xl px-4 flex flex-col items-center gap-2">

        <h1 className="text-3xl font-bold text-zinc-900">
          FocusFlow
        </h1>

        <p className="text-xl text-zinc-700 border-b-[1px] border-blue-500 font-medium">
          Organize seu dia, aumente seu foco.
        </p>

        <p className="text-lg text-end text-zinc-500 font-medium mt-2">
          Pequenos passos diários constroem grandes resultados.
        </p>
      </div>
    </header>
  )
}
