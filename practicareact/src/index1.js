//nombre,apellido,imagen, telefono,correo

import React from "react";
import Reactdom from "react-dom";
const datos = {
  nombre: "Hefzi",
  apellido: "Murillo",
  imagen: "../logo512.png",
  telefono: "6365355454",
  correo: "bamurillo15@gmail.com",
};
function obtenerDatos(datos) {
  if (datos) {
    return `${datos.nombre}${datos.apellido}${datos.telefono}${datos.correo}`;
  }
  return "no datos";
}
const elemento = (
  <div>
    <h1>{obtenerDatos(datos)}</h1>
    <a></a>
    <img src={datos.imagen} />
  </div>
);
const contenedor = document.getElementById("root");
Reactdom.render(elemento, contenedor);

const contenedor = document.getElementById("root");
Reactdom.render(
  <Tarjeta
    texto="$100,000"
    imagen="https://http2.mlstatic.com/D_NQ_NP_942487-MLM31509500751_072019-O.jpg"
    texto2="Este es un mustang 98, negro que me gusta mucho"
  />,
)
  contenedor
  <div>
    <Tarjeta
    texto="$100,000"
    imagen="https://http2.mlstatic.com/D_NQ_NP_942487-MLM31509500751_072019-O.jpg"
    texto2="Este es un mustang 98, negro que me gusta mucho"/>,
  <Reloj/>,
  <Imagen
    imagen1="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPUbPYhL10K25mjpAbECcrL3vP3zUdDCkQBQ&usqp=CAU"
  />,
  </div>

 //esto era de la tarjeta para que cambiara las fotos en 5 seg 
 //componentDidMount(){
 // setTimeout(() => {
   // this.setState({
     // imag:'data:image/jpeg;base64,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',
      //text:'grs',
      //text2:'Hef'
    //})
  //}, 5000);
}