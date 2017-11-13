import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      numero: 0
    };

    this.updateNumero = this.updateNumero.bind(this);
  }

  updateNumero(){
    this.setState({
      numero: this.state.numero + 1
    });
  }

  render() {
      return (
        <section>
        <div>
          <div>
            <Title></Title>
            <h3>{this.state.numero}</h3>
            <button onClick={()=>{this.updateNumero()}} >Crear cuenta gratuita</button>
            <img src={process.env.PUBLIC_URL + 'images/title.png'} height="300" />
            <div>
              <ul>
                <li>
                  <h3>Calicaciones con emociones</h3>
                  <p>Calica tus lugares con experencias, no con números</p>
                </li>
                <li>
                  <h3>¿Sin Internet? Sin probmeas</h3>
                  <p>PLaces funciona sin internet o en conexiones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                  <p>define tu lista de sitions favoritos</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </section>
      );
  }
}

export default App;
