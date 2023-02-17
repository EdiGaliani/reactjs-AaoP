import React, { useState } from "react";

function App() {

    const [valor, setValor] = useState(0);

    function incremento() {
        setValor(valor + 1)
    }

    function decremento() {
        setValor(valor - 1)
    }
    
    return (
        <>
            <h1>Hello World</h1>
            <button onClick={decremento}>Decrementar</button>
            {valor}
            <button onClick={incremento}>Incrementar</button>
            
            
        </>
    )
}

export default App