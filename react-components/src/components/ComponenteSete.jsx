import React from "react";

const ComponenteSete = (props) => {
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            {props.valor == true ? <p>Verdade</p> : <p>Mentira</p> }
        </div>
    )
}

export default ComponenteSete