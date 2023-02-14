import React from "react";
import ComponenteFilhoC from "./ComponenteFilhoC";

function ComponentePaiB(props) {
    return (
        <div>
            <p>Pai</p>
            <ComponenteFilhoC {...props}/>
        </div>
    )
}

export default ComponentePaiB