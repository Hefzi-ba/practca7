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