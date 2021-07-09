import React, { Component } from 'react';

import './style.css';

class Botao extends Component {
    render(){
      return(
        <div>
          <button className="textoBotao" onClick={this.props.acaoBtn}>{this.props.nome}</button>
        </div>
      );
    }
}

export default Botao;
  