import React from "react";
import ComponenteB from "./ComponenteB";

function ComponenteA(props) {

    function executar(valor1, valor2) {
        console.log(valor1)
        console.log(valor2)
    }
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <ComponenteB title="Componente B" funcao={executar}></ComponenteB>
        </div>
    )
}

export default ComponenteA
