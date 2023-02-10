import React from "react";
import dados_cliente from "../dados_clientes/dados_clientes";

const ComponenteSeis = (props) => {
    function clientes() {
        return dados_cliente.map(cliente => {
            return <li key={cliente.id_cliente}>Nome: {cliente.nome} | Email: {cliente.email}</li>
        })
    }

    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <ul>
                {clientes()}
            </ul>
            
        </div>
    )
}

export default ComponenteSeis