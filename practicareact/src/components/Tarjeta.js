import React from "react";
import "./styles/estilos.css";
import Card from "./Tarjeta";
import { Link } from "react-router-dom";
class Tarjeta extends React.Component {
  state={
    datos:[]
  }
  async componentDidMount(){
    console.log("estas dentro de dimount")
    await this.fetchEjercicio()
  }
  fetchEjercicio=async()=>{
    let res=await fetch('http://localhost:8000/')
    let datosRecibidos=await res.json()
    console.log(datosRecibidos);
    let datos=datosRecibidos.datos
    //console.log(datos)
    this.setState({
      datos
    })
  }

    
  

  render() {
    return (
      <div >
        {
          this.state.datos.map((credenciales)=>{
            return(
              <Card
                key={credenciales.id}
                description={credenciales.description}
                precio={credenciales.precio}
              />
            )
          })
        }
      </div>
    );
  }
}
export default Tarjeta;
