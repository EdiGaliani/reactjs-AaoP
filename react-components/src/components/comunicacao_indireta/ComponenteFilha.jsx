import React from "react";

function ComponenteFilha(props) {
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <button onClick={props.click}>Clicar</button>
        </div>
    )
}

export default ComponenteFilha