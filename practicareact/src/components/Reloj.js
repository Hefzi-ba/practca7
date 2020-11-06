import React from 'react';
import "./styles/estilos.css";
import { Link } from 'react-router-dom';
class Reloj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
}
componentDidMount() {
  setInterval(
    () => this.tick(),
    1000
  );
}
tick() {
  this.setState({
    date: new Date()
  });
}

render() {
  return (
    <div>
      <h1 className="color2">Hola Mundo </h1>
      <h2 className="color">It is {this.state.date.toLocaleTimeString()}.</h2>
      <Link to="./Tarjeta"> <img src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-personal-information-orange-flat-business-card-small-icon-png-image_4478680.jpg"></img>Ir a Tarjeta</Link>
    </div>
  );
}
}
 export default Reloj;