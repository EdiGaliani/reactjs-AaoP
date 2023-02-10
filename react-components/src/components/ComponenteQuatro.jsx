import React from "react";
import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
            <ComponenteCinco title="Componente cinco" />
            <ComponenteCinco title="Componente cinco" />
        </div>
        
    )
}

export default ComponenteQuatro