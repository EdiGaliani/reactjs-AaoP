import React, { useState } from "react";

function App() {

    // const [valor, setValor] = useState(100);

    // function incremento() {
    //     setValor(valor_antigo => valor_antigo + 1)
    // }

    // function decremento() {
    //     setValor(valor_antigo => valor_antigo - 1)
    // }

    const [playerName, setPlayerName] = useState(() => {
        return "João"
    })

    const [score, setScore] = useState(() => {
        return 0
    })

    function aumentar() {
        setScore(sc_antigo => {
            return sc_antigo + 1
        })
    }
    
    return (
        <>
            <h1>React Hooks - useStates</h1>
            <h2>Nome: {playerName}</h2>
            <h2>Score: {score}</h2>
            <button onClick={aumentar}>Aumentar</button>
            {/* <button onClick={decremento}>Decrementar</button>
            <span>{valor}</span>
            <button onClick={incremento}>Incrementar</button> */}
            
            
        </>
    )
}

export default App