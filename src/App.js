import React from "react"
import Aventura from "./components/Aventura";
import data from "./components/data.json";
import Elecciones from "./components/Elecciones"
import Registro from "./components/Registro";

let recordatorioRegistro = [];

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      avance: 0,
      eleccion : ""
    }
  }

  handleClick = seleccion => {

    if (this.state.avance >= 7){
      alert("Fin de la Historia")
    }
    else if (seleccion === "a" && this.state.eleccion !== "a"){
      this.setState({avance: this.state.avance + 1 , eleccion: seleccion})
    }
    else if ((seleccion === this.state.eleccion) || 
      (seleccion === "b" && this.state.eleccion === "")){
      this.setState({avance: this.state.avance + 2 , eleccion: seleccion})
    }
    else if (this.state.eleccion === "a" && seleccion === "b"){
      this.setState({avance: this.state.avance + 3 , eleccion: seleccion})
    }

    recordatorioRegistro.push(seleccion)
  }
  render() {
    return (
      <div className="App">
        <div className="layout">
          <Aventura aventura = {data[this.state.avance]}/>
          <Elecciones aventura = {data[this.state.avance]} seleccionOpcionPadre = {this.handleClick}/>
          <Registro ultimaEleccion = {this.state.eleccion} listaSelecciones = {recordatorioRegistro}/>
          
        </div>
      </div>
    );
  }
}

export default App;
