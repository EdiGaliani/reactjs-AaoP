import React from "react";

// export default (props) => 
//     <div className="componente">
//         <p>Título: Componente três</p>
//         <p>Componente React Com Arrow Function mais enxuto</p>
//     </div>

const ComponenteTres = (props) => {
    return (
        <div className="componente">
            <p className="title">Título: {props.title}</p>
        </div>
    )
}

export default ComponenteTres