import { useState } from "react";

function Teste(){
    //Primeira posição sempre vem a variável
    //Segunda posição sempre vem a função
    const [contador, setContador] = useState(0);//variável de estado

    const [nomes, setNomes] = useState([
        "Samuel", 
        "Emerson", 
        "Antônio", 
        "Jean", 
        "Bryan", 
        "Carol", 
        "Thamires"
    ]);

    const [nome, setNome] = useState("")

    const handleSend = () => {
        // let nomesAux = nomes
        // nomesAux.push(nome)
        // setNome(nomesAux)
        setNome([...nomes, nome]);
        setNome("")
    }

    return(
        
        
        <>
            <h1>
                {contador}
            </h1>
            <ul>
                {nomes.map(nome => <li>{nome}</li>)}
            </ul>
            <button onClick={() => setContador(contador+1)}>
                Contar
            </button>
            <br/>
            <br/>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} value={nome}/>

            <h2>{nome}</h2>
            <br/>
            <button onClick={() => setNome("")}>Limpar</button>
            <br/>
            <br/>
            <button onClick={handleSend}>Enviar</button>
        </>
    )
}

export default Teste;