import React from "react";
import Reactdom from "react-dom";
import Reloj from "./components/Reloj";
import Tarjeta from "./components/Tarjeta";
import "bootstrap/dist/css/bootstrap.css";


const contenedor = document.getElementById("root");

Reactdom.render(
  <div>
    <Tarjeta
    texto="$100,000"
    imagen="https://http2.mlstatic.com/D_NQ_NP_942487-MLM31509500751_072019-O.jpg"
    texto2="Este es un mustang 98, negro que me gusta mucho"/>,
  <Reloj/>,
  </div>
  ,
  
  contenedor
)
