import React from "react";

function ComponenteB(props) {

    let valor1 = 100;

    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <button onClick={() => {
                valor1 = Math.floor(Math.random() * 100)
                props.funcao('Valor: ' + valor1 , 'João')
            }}>Executar</button>
            <p>{valor1}</p>
        </div>
    )
}

export default ComponenteB