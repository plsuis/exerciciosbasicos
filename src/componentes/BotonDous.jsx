export default function BotonDous(props){
   
    return <button className={props.estilo} onClick={props.funcion}>{props.titulo}</button>
}