import React from "react";
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
        </div>
      </div>
    );
  }
}
export default Imagen;
