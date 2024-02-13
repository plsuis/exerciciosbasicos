import { useState } from "react"
export default function EditarInput(){
    const [boleano,setBoleano] = useState(true);
    const [firtsName,setName] = useState("cambia o nome");
    return (<>
    <input readOnly={boleano} value={firtsName} onChange={(e)=> setName(e.target.value)}/>
    <button onClick={()=>{setBoleano(!boleano)}}>Cambiar estado</button>
    </>)
}