import React from "react";
import Reactdom from "react-dom";
import App from "./components/App.js";

import "bootstrap/dist/css/bootstrap.css";



const contenedor = document.getElementById("root");

Reactdom.render(
  <App/>,
  
  
  contenedor
  
)
