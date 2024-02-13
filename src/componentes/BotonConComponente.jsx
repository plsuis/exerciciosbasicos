import { useState } from "react";
import BotonDous from "./BotonDous";

export default function BotonConComponente({children}){
    const [ver,setVer] = useState(false);
    const [clase,setClase] = useState("neutro");
    const [titulo,setTitulo] = useState("VER saudo")

    const _setVer = ()=>{
        clase === "neutro" ? setClase("verde") : setClase("neutro");
        titulo === "VER saudo" ? setTitulo("OCULTAR saudo") : setTitulo("VER saudo")
        setVer(!ver)
    }
    return(<>
    <h4>Estou no compoñente que tén children</h4>
    <BotonDous estilo={clase} funcion={_setVer} titulo={titulo}/>
    {ver && children}
    </>)
}