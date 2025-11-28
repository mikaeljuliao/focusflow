import React, { useState } from "react";

export default function Objetivos() {
  const [objetivos, setObjetivos] = useState([]);

  // Adiciona uma nova tarefa dinamicamente
  function adicionarTarefa() {
    setObjetivos([...objetivos, { objetivo: "", prioridade: "Média" }]);
  }

  // Atualiza os campos de cada tarefa
  function atualizarTarefa(index, campo, valor) {
    const novas = [...tarefas];
    novas[index][campo] = valor;
    setTarefas(novas);
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center ">

      {/* ============ LADO ESQUERDO — OBJETIVOS ============ */}
      <div className="w-1/2 flex flex-col  px-6 py-6 gap-3">

        <h1 className="text-2xl text-center font-bold py-8">
          Objetivos e metas principais
        </h1>

        <p className="text-start w-3/4 text-lg text-zinc-700 py-5">
          Nesse campo, digite seus objetivos e metas e em quanto tempo deseja
          alcançá-los. Lembre-se sempre do propósito das suas metas!
        </p>

        {/* Objetivo principal */}
        <label htmlFor="seuObjetivo" className="text-zinc-700 text-lg">
          Digite seu objetivo principal
        </label>
        <input
          type="text"
          placeholder="Qual seu objetivo principal?"
          id="seuObjetivo"
          className="py-3 pl-3 border rounded"
        />

        <label htmlFor="data1" className="text-zinc-700 text-lg">
          Selecione uma data pra esse objetivo:
        </label>
        <input
          type="date"
          id="data1"
          className="py-3 pl-3 border rounded"
        />

        {/* Segundo objetivo */}
        <label htmlFor="SegundoObjetivo" className="text-zinc-700 text-lg">
          Digite seu segundo objetivo
        </label>
        <input
          type="text"
          placeholder="Qual seu segundo objetivo?"
          id="SegundoObjetivo"
          className="py-3 pl-3 border rounded"
        />

        <label htmlFor="data2" className="text-zinc-700 text-lg">
          Selecione uma data pra esse objetivo:
        </label>
        <input
          type="date"
          id="data2"
          className="py-3 pl-3 border rounded"
        />
      </div>


    </div>
  );
}
