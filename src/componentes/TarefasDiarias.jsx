import React, { useState } from "react";

export default function TarefasDiarias() {
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("Média");

  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (!descricao.trim()) return;

    const nova = {
      descricao,
      prioridade,
    };

    setTarefas([...tarefas, nova]);

    setDescricao("");
    setPrioridade("Média");
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center">

      <div className="w-full flex justify-center gap-6">

        {/* ========================== CRIAR TAREFA (ESQUERDA) ========================== */}
        <div className="w-1/2 flex flex-col px-6 py-6 gap-4">

          <h1 className="text-2xl text-center font-bold py-4">
            Organize sua rotina diária
          </h1>

          <p className="text-start w-3/4 text-lg text-zinc-700 py-2">
            Adicione suas tarefas do dia, incluindo prioridade e tempo estimado.
          </p>

          {/* Input descrição */}
          <label className="text-zinc-700 text-lg">Descrição + Minutos</label>
          <input
            type="text"
            value={descricao}
            placeholder="Ex: Estudar React — 40min"
            className="py-3 pl-3 border rounded"
            onChange={(e) => setDescricao(e.target.value)}
          />

          {/* Select prioridade */}
          <label className="text-zinc-700 text-lg">Prioridade</label>
          <select
            value={prioridade}
            className="py-3 pl-3 border rounded"
            onChange={(e) => setPrioridade(e.target.value)}
          >
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>

          <button
            className="w-full bg-blue-500 p-2 text-white text-lg rounded mt-4"
            onClick={adicionarTarefa}
          >
            Adicionar tarefa
          </button>
        </div>

        {/* ========================== LISTA TAREFAS (DIREITA) ========================== */}
        <div className="w-1/2 flex flex-col px-6 py-6 gap-4">

          <h1 className="text-2xl text-center font-bold py-4">
            Minhas Tarefas de Hoje
          </h1>

          <div className="flex flex-col gap-4">
            {tarefas.length === 0 && (
              <p className="text-zinc-500 text-center">
                Nenhuma tarefa adicionada ainda.
              </p>
            )}

            {tarefas.map((t, i) => (
              <div
                key={i}
                className="border p-4 rounded-lg bg-white shadow flex flex-col gap-2"
              >
                <span className="font-semibold">{t.descricao}</span>
                <span className="text-sm text-zinc-600">
                  Prioridade: {t.prioridade}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
