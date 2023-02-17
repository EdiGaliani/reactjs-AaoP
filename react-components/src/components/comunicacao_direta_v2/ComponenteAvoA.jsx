import React from "react";
import ComponentePaiB from "./ComponentePaiB";

function ComponenteAvoA(props) {
    return (
        <div>
            <p>Avô</p>
            <ComponentePaiB nome="Joaquim" sobrenome="Santos"/>
        </div>
    )
}

export default ComponenteAvoA 