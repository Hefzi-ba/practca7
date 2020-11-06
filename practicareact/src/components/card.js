import React from "react";
import './styles/estilos.css';
class Card extends React.Component{
    contructor(props){
        const{key, description, precio }= this.props;
        this.state= {
            Id:key,
            descripcion:description,
            precio:precio
        };
    }
    render(){
        const { id, descripcion, precio }= this.state;
        return(
            <div className="card">
                <h1>{id}</h1>
                <div className="card-body">
                    <p className="card-text">{descripcion}</p>
                    <h1>{precio}</h1>   
                </div>
            </div>
        );
    }
}
export default Card;