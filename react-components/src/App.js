import React from "react";
import ComponenteDois from "./components/componenteDois";
import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/componenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";

function App() {
    return (
        <>
            <ComponenteUm />
            <ComponenteDois />
            <ComponenteTres title="Componente Três"/>
            <ComponenteQuatro title="Componente Quatro" />
        </>
    )
}

export default App