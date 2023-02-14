import React from "react";
import ComponenteDois from "./components/componenteDois";
import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/componenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponentSeis";
import ComponenteSete from "./components/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove";
import ComponentePai from "./components/comunicacao_direta/ComponentePai";
import ComponenteMae from "./components/comunicacao_indireta/ComponenteMae";
import ComponenteA from "./components/comunicacao_indireta_v2/ComponenteA";
import ComponenteAvoA from "./components/comunicacao_direta_v2/ComponenteAvoA";

function App() {
    return (
        <>
            <ComponenteAvoA />
            <ComponenteA title="Comunicação Indireta v2"></ComponenteA>
            <ComponentePai title="Comunicação Direta" />
            <ComponenteMae title="Comunicação Indireta" />
            <ComponenteUm />
            <ComponenteDois />
            <ComponenteTres title="Componente Três"/>
            <ComponenteQuatro title="Componente Quatro" />
            <ComponenteSeis title="Componente Seis" />
            <ComponenteSete title="Componente Sete" valor={true} />
            <ComponenteOito title="Componente Oito" valor="Maria" />
            <ComponenteNove title="Componente Nove" valor="Carlos" />
            
        </>
    )
}

export default App
            