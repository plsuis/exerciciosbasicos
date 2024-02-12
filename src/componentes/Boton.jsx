import React,{useState} from 'react';

export default function Boton(){
    let [valor,setValor] = useState(0)

    const sumarValor = ()=>{
        valor += 1;
        setValor(valor)
    }

    const resetValor = ()=>{
        setValor(0)
    }

    const restarValor = ()=>{
        valor -= 1;
        setValor(valor)
    }
    return(<>
    <div>Valor actual : {valor}</div>
    <button onClick={sumarValor}>Suma 1</button>
    <button onClick={resetValor}>Reset valor</button>
    <button onClick={restarValor}>Resta 1</button>
    </>)
}