import React from "react";
import ComponenteFilho from "./ComponenteFilho";

function ComponentePai(props) {
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <p>Pai</p>
            <ComponenteFilho title="Componente Filho" cargo="Administrador">
                Edi Galiani
            </ComponenteFilho>
            <ComponenteFilho title="Componente Filho" cargo="Estudante">
                Miguel Lucca
            </ComponenteFilho>
            <ComponenteFilho title="Componente Filho" cargo="Poliglóta">
                Melissa Galiani
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai