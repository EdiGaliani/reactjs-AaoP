import React, { useEffect, useRef, useState } from "react";
import Emb from "./Emb";

export default function App() {

    const [texto, setTexto] = useState('')
    const inputRef = useRef()
    const input2Ref = useRef()

    function executar1() {
        inputRef.current.focus()
    }

    function executar2() {
        input2Ref.current.focus()
    }

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            <input ref={inputRef} type="text" value={texto} onChange={evento => {setTexto(evento.target.value)}}/>
            <input ref={input2Ref} type="text" />
            <hr />
            <button onClick={executar1}>Clicar</button>
            <button onClick={executar2}>Clicar</button>
            <Emb />
        </>
    )
}