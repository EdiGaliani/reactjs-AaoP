import React from "react";
import ComponenteFilha from "./ComponenteFilha";

function ComponenteMae(props) {
    function clicou() {
        console.log("O botão do componente Filha foi clicado")
    }
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <ComponenteFilha title="Componente Filha" click={clicou}>

            </ComponenteFilha>
        </div>
    )
}

export default ComponenteMae