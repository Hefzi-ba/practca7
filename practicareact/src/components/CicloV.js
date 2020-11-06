import React from "react";
import { Link } from "react-router-dom";
import "./styles/estilos.css";


class Imagen extends React.Component {
  constructor(props){
    super(props)
    const{imagen1}=this.props;
    this.state={
      
      imag1:imagen1,
      
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        imag1:'https://i.etsystatic.com/9628220/r/il/06b90c/633937443/il_570xN.633937443_toc9.jpg'        
      })
    }, 10000);
    setTimeout(() => {
        this.setState({
          imag1:'https://i.pinimg.com/originals/63/cf/35/63cf35374337dc11989c8c2e1fc02382.jpg'        
        })
      }, 25000);
      setTimeout(() => {
        this.setState({
          imag1:'https://www.carscoops.com/wp-content/uploads/2020/05/Ford-Mustang-Chopped-a-1024x555.jpg'        
        })
      }, 35000);
  }
    
  

  render() {
    const {imag1} = this.state;
    return (
      <div className="card" style={{width: '18rem'}}>
        <img src={imag1} className="card-img-top" alt="Carro"></img>
        <div className="card-body">
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
          <Link to="./Reloj"><img src="data:image/png;base64,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"></img>Ir a reloj</Link>
        </div>
      </div>
    );
  }
}
export default Imagen;
