import React, { Component } from 'react';
import biscoitoImg from './assets/biscoito.png';

import Botao from './components/Botao';

import './style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.frases = ['Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'A vida trará coisas boas se tiver paciência.',
    'Espere pelo mais sábio dos conselhos: o tempo.'];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img className="imgBiscoito" src={biscoitoImg} alt="biscoito da sorte"/>
        <Botao nome="Abrir biscoito da sorte" acaoBtn={this.quebraBiscoito}/>
        {this.state.textoFrase && <h3 className="textoFrase">{' " ' + this.state.textoFrase + ' "'}</h3>}
      </div>
    );
  }
}
export default App;

