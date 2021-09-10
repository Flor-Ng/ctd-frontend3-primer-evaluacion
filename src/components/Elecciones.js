import React from "react";

class Elecciones extends React.Component{

    constructor(props){
        super(props);
        this.state={
            eleccionA: this.props.aventura.opciones.a,
            eleccionB: this.props.aventura.opciones.b
            
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.aventura !== this.props.aventura) {
            this.setState({ 
                eleccionA: this.props.aventura.opciones.a,
                eleccionB: this.props.aventura.opciones.b
            })
        }
    }

    seleccionOpcion = eleccion => {
        this.props.seleccionOpcionPadre(eleccion)
    }

    render(){
        return(
            <div className="opciones">
            <div className="opcion">
              <button className="botones" onClick={()=>this.seleccionOpcion("a")}>A</button>
              <h2> {this.state.eleccionA}</h2>
            </div>
            <div className="opcion">
              <button className="botones" onClick={()=>this.seleccionOpcion("b")}>B</button>
              <h2> {this.state.eleccionB}</h2>
            </div>
          </div>
        )
    }
}

export default Elecciones;