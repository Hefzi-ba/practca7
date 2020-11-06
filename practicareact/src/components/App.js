import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Tarjeta from"./Tarjeta";
import Reloj from "./Reloj";
import Imagen from "./CicloV";
import Noencontrado from "./Noencontrado"; 



 const App = () => (
     <BrowserRouter>
        <Switch>
            <Route exact path="/Tarjeta" component={Tarjeta}/>
            <Route exact path="/Reloj" component={Reloj}/>
            <Route exact path="/Imagen" component={Imagen}/>
            <Route component={Noencontrado}/>
        </Switch>     
    </BrowserRouter>

 )
 export default App