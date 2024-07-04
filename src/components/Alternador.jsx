import React, {useState} from "react";

function Alternador(){
    const [texto, alterarTexto] = useState(true);

    let alternar = () => {
        alterarTexto(!texto);
    }

    return(
            <div>
                <h1>{texto? "Bernardo Maccari" : "Bernardo Perini"}</h1>
                <button onClick={alternar}>Alterar Texto</button>
            </div>
        )
     
}

export default Alternador;