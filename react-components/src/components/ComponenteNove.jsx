import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function(props) {
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            {props.valor}

            <CondicaoIf condicao={props.valor == "João"}>
                <p>Este é o meu nome</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor == "Ana"}>
                <p>Esta é a minha irmã</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor != "Ana" && props.valor != "João"}>
                <p>Desconheço esse nome</p>
            </CondicaoIf>

        </div>
    )
}