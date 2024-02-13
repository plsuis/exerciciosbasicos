import { useState } from "react";
import BotonDous from "./BotonDous";
import Imaxen from "./Imaxen";

export default function ImaxenConBotonVerNoVer(){
    const [ver,setVer] = useState(false);
    const [clase,setClase] = useState("neutro");
    const [titulo,setTitulo] = useState("VER imaxen")

    
    const _setVer = ()=>{
        clase === "neutro" ? setClase("verde") : setClase("neutro");
        titulo === "VER imaxen" ? setTitulo("OCULTAR imaxen") : setTitulo("VER imaxen")
        setVer(!ver)
    }
    return(<>
    <BotonDous estilo={clase} funcion={_setVer} titulo={titulo}/>
    {ver && <Imaxen />}
    </>)
}