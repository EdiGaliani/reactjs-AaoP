import React from "react";

const ComponenteOito = (props) => {
    function condicao() {
        switch (props.valor) {
            case "João":
                return <p>É meu nome</p>
                break;
            case "Ana":
                return <p>É meu mulher</p>
                break;
        
            default:
                return <p>Desconheço quem teha esse nome</p>
                break;
        }
    }


    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            {condicao()}
        </div>
    )
}

export default ComponenteOito