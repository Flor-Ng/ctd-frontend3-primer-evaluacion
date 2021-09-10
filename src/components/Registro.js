function Registro (props){
    return(
        <div className = "recordatorio">
            <h3>
                Selección anterior: {props.ultimaEleccion.toUpperCase()} 
            </h3>
            <h4>
                Historial de opciones elegidas: 
            </h4>
            <ul>
                {props.listaSelecciones.slice(0, -1).map(seleccion => <li>{seleccion.toUpperCase()}</li>)}
            </ul>
        </div>
    )

}

export default Registro;