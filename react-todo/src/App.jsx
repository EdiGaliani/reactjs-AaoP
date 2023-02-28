import React, { useState, useRef } from "react";


export default function App() {

    // STATE
    const [listaTarefas, SetListaTarefas] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return '' })

    // REF
    const idTarefa = useRef(0)
    const inputRef = useRef()

    function adicionarTarefa() {
        if(tarefa !== '') {
            SetListaTarefas(old => { return [ ...old, {id: idTarefa.current, texto: tarefa}]})
            idTarefa.current = idTarefa.current + 1
            setTarefa('')
        }
        inputRef.current.focus()
    }

    function limparTarefas() {
        SetListaTarefas(old => { return [] })
        idTarefa.current = 0
    }

    function removerTarefa(id) {
        const tmp = listaTarefas.filter(tarefa => tarefa.id !== id)
        SetListaTarefas(tmp)
    }
    
    return (
        <>
            <h3>GESTOR DE TAREFAS</h3>
            <hr />
            <input ref={inputRef} type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value)}} />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas: </p>
            {listaTarefas.map((t) => {
                return <p key={t.id}>{t.texto} <span onClick={() => { removerTarefa(t.id)}}>-[ Remover ]</span></p>
                
            })}
        </>
    )
}
