import React from 'react';
import "./styles/estilos.css";
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
    </div>
  );
}
}
 export default Reloj;